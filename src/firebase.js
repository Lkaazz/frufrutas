// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs, doc, getDoc, setDoc } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "aulaweb-f4d36.firebaseapp.com",
  projectId: "aulaweb-f4d36",
  storageBucket: "aulaweb-f4d36.appspot.com",
  messagingSenderId: "792554501068",
  appId: "1:792554501068:web:90f6950d8c4fc0ab962369"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, collection, getDocs, doc, getDoc, setDoc };
