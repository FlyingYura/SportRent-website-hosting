require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const admin = require('firebase-admin');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

app.get('/', (req, res) => {
  res.send('Сервер платформи оренди спортивного обладнання працює!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});

app.post('/register', async (req, res) => {
    try {
      const { email, password, name } = req.body;
      
      const userRecord = await admin.auth().createUser({
        email,
        password,
        displayName: name
      });
      
      await db.collection('users').doc(userRecord.uid).set({
        name, 
        email,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });
      
      const token = jwt.sign(
        { uid: userRecord.uid, email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      
      res.status(201).json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      
      const snapshot = await db.collection('users')
        .where('email', '==', email)
        .limit(1)
        .get();
      
      if (snapshot.empty) {
        return res.status(401).json({ error: 'Користувача не знайдено' });
      }
      
      const userDoc = snapshot.docs[0];
      const user = userDoc.data();
      
      const token = jwt.sign(
        { uid: userDoc.id, email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      
      res.json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.get('/profile', authenticateJWT, async (req, res) => {
    try {
      const userDoc = await db.collection('users').doc(req.user.uid).get();
      
      if (!userDoc.exists) {
        return res.status(404).json({ error: 'Користувача не знайдено' });
      }
      
      res.json(userDoc.data());
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

app.get('/rentals', authenticateJWT, async (req, res) => {
    try {
      const { minPrice, maxPrice } = req.query;
      let query = db.collection('rentals').where('userId', '==', req.user.uid);
      
      if (minPrice) {
        query = query.where('price', '>=', parseFloat(minPrice));
      }
      
      if (maxPrice) {
        query = query.where('price', '<=', parseFloat(maxPrice));
      }
      
      const snapshot = await query.get();
      const rentals = [];
      
      snapshot.forEach(doc => {
        rentals.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      res.json(rentals);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.post('/rentals', authenticateJWT, async (req, res) => {
    try {
      const { equipmentId, name, price, image, startDate, endDate, days } = req.body;
      
      const rentalRef = await db.collection('rentals').add({
        userId: req.user.uid,
        equipmentId,
        name,
        price,
        image,
        startDate,
        endDate,
        days,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });
      
      res.status(201).json({ id: rentalRef.id });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.delete('/rentals/:id', authenticateJWT, async (req, res) => {
    try {
      const rentalId = req.params.id;
      const rentalRef = db.collection('rentals').doc(rentalId);
      const rentalDoc = await rentalRef.get();
      
      if (!rentalDoc.exists) {
        return res.status(404).json({ error: 'Оренду не знайдено' });
      }
      
      if (rentalDoc.data().userId !== req.user.uid) {
        return res.status(403).json({ error: 'Недостатньо прав' });
      }
      
      await rentalRef.delete();
      res.json({ message: 'Оренду видалено' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });