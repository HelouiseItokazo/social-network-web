// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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
const auth = getAuth(app);
export default auth;