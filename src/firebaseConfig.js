// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBLEkClIkK7vk3T0G9kVEFy-ZGQzcDhbh8",
  authDomain: "trabajo-final-8a59e.firebaseapp.com",
  projectId: "trabajo-final-8a59e",
  storageBucket: "trabajo-final-8a59e.firebasestorage.app",
  messagingSenderId: "455893873125",
  appId: "1:455893873125:web:3bd139f64c676f12d3bf0c",
  measurementId: "G-S27HR89BNW",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore y exportalo para usarlo en otros archivos
export const db = getFirestore(app);

