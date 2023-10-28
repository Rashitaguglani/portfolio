// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_TpYVSENCxg5tSXuUGxx_inDveAXyeis",
  authDomain: "portfolio-rashita.firebaseapp.com",
  projectId: "portfolio-rashita",
  storageBucket: "portfolio-rashita.appspot.com",
  messagingSenderId: "119040311257",
  appId: "1:119040311257:web:f141b1293544fef61ee3c8",
  measurementId: "G-37DTFV7P2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);