import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import styles from './rentalsPage.module.css';

const RentalsPage = () => {
  const [user] = useAuthState(auth);
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists() && userDoc.data().cart) {
          setRentals(userDoc.data().cart);
        }
        setLoading(false);
      }
    };

    fetchCart();
  }, [user]);

  const handleRemove = async (index) => {
    if (!user) return;
    
    const newRentals = [...rentals];
    newRentals.splice(index, 1);
    
    try {
      await updateDoc(doc(db, 'users', user.uid), {
        cart: newRentals
      });
      setRentals(newRentals);
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const handleQuantityChange = async (index, newQuantity) => {
    if (!user || newQuantity < 1) return;
    
    const newRentals = [...rentals];
    newRentals[index] = {
      ...newRentals[index],
      quantity: newQuantity,
      price: newRentals[index].basePrice * newRentals[index].days * newQuantity
    };
    
    try {
      await updateDoc(doc(db, 'users', user.uid), {
        cart: newRentals
      });
      setRentals(newRentals);
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const handleDaysChange = async (index, newDays) => {
    if (!user || newDays < 1) return;
    
    const newRentals = [...rentals];
    newRentals[index] = {
      ...newRentals[index],
      days: newDays,
      price: newRentals[index].basePrice * newDays * newRentals[index].quantity
    };
    
    try {
      await updateDoc(doc(db, 'users', user.uid), {
        cart: newRentals
      });
      setRentals(newRentals);
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const totalPrice = rentals.reduce((sum, item) => sum + (item.price || 0), 0);

  if (!user) {
    return (
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Будь ласка, увійдіть в систему</h2>
        <p className={styles.noRentals}>
          Щоб додавати товари до кошика, вам потрібно{' '}
          <Link to="/login" className={styles.authLink}>увійти</Link> або{' '}
          <Link to="/register" className={styles.authLink}>зареєструватися</Link>.
        </p>
      </section>
    );
  }

  if (loading) {
    return <div className={styles.loading}>Завантаження кошика...</div>;
  }

  return (
    <section id="rentals" className={styles.section}>
      <h2 className={styles.sectionTitle}>Ваші орендовані предмети</h2>
      
      {rentals.length === 0 ? (
        <p className={styles.noRentals}>У вас немає активних оренд.</p>
      ) : (
        <div className={styles.pageLayout}>
          <div className={styles.rentalList}>
            {rentals.map((rental, index) => (
              <div key={index} className={styles.rentalItem}>
                <div className={styles.itemImage}>
                  <img src={rental.image} alt={rental.name} />
                </div>
                <div className={styles.itemDetails}>
                  <h3 className={styles.itemTitle}>{rental.name}</h3>
                  <p className={styles.itemSeller}>SubaU</p>
                  <div className={styles.priceInfo}>
                    <span className={styles.currentPrice}>{rental.price} грн</span>
                  </div>
                  <div className={styles.rentalPeriod}>
                    <span>Період оренди:</span>
                    <input
                      type="number"
                      min="1"
                      value={rental.days || 1}
                      onChange={(e) => handleDaysChange(index, parseInt(e.target.value) || 1)}
                      className={styles.daysInput}
                    />
                    <span>днів</span>
                  </div>
                  <div className={styles.quantityControl}>
                    <button 
                      onClick={() => handleQuantityChange(index, (rental.quantity || 1) - 1)}
                      disabled={(rental.quantity || 1) <= 1}
                      className={styles.quantityBtn}
                    >
                      -
                    </button>
                    <span>{rental.quantity || 1}</span>
                    <button 
                      onClick={() => handleQuantityChange(index, (rental.quantity || 1) + 1)}
                      className={styles.quantityBtn}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className={styles.itemActions}>
                  <button 
                    onClick={() => handleRemove(index)} 
                    className={styles.removeBtn}
                  >
                    Видалити
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.orderSummary}>
            <h3 className={styles.summaryTitle}>До оплати</h3>
            <div className={styles.summaryItems}>
              {rentals.map((rental, index) => (
                <div key={index} className={styles.summaryItem}>
                  <span className={styles.summaryItemName}>
                    {rental.name} ({rental.quantity || 1} шт. × {rental.days || 1} дн.)
                  </span>
                  <span className={styles.summaryItemPrice}>{rental.price} грн</span>
                </div>
              ))}
            </div>
            <div className={styles.summaryTotal}>
              <div className={styles.totalRow}>
                <span>Сума:</span>
                <span>{totalPrice} грн</span>
              </div>
            </div>
            <Link 
              to="/payment" 
              className={styles.checkoutButton}
              state={{ rentals }}
            >
              Оплатити
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default RentalsPage;