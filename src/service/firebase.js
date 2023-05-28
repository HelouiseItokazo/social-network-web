// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQuGnk7kC5ZUiXkZ7Gjbo0KPZIJANwrlQ",
  authDomain: "social-network-web-80ecd.firebaseapp.com",
  projectId: "social-network-web-80ecd",
  storageBucket: "social-network-web-80ecd.appspot.com",
  messagingSenderId: "280614714320",
  appId: "1:280614714320:web:cf59630cfc95d1f4cbd7d5",
  measurementId: "G-MD515KM1S2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);