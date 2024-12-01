import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeoL5tWkh35WIrUxXxCk382mwAi7jY3Y8",
  authDomain: "beatsvault-2430c.firebaseapp.com",
  projectId: "beatsvault-2430c",
  storageBucket: "beatsvault-2430c.firebasestorage.app",
  messagingSenderId: "708856409680",
  appId: "1:708856409680:web:273331d300b42970fb2b55",
  measurementId: "G-RWT9RV49HH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
