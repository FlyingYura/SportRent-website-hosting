import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDusomgyCXGUxoLjgSSdsvHzQlIxW44cQ4",
  authDomain: "subau-2012f.firebaseapp.com",
  projectId: "subau-2012f",
  storageBucket: "subau-2012f.appspot.com",
  messagingSenderId: "16152055759",
  appId: "1:16152055759:web:bc2ec5378f8cd888014cba",
  measurementId: "G-Y4JGW89437"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

// Function to sign in with Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};