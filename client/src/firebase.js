// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "ecommerce-7e4d1.firebaseapp.com",
  projectId: "ecommerce-7e4d1",
  storageBucket: "ecommerce-7e4d1.appspot.com",
  messagingSenderId: "473182603978",
  appId: "1:473182603978:web:eca66a7ffeeef1660ec233",
  measurementId: "G-VPF2NT11H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);