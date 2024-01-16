// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_K7q97s2ATv_PtseoZXikIEk8-zdS4YE",
  authDomain: "fakestoreapi-c5555.firebaseapp.com",
  projectId: "fakestoreapi-c5555",
  storageBucket: "fakestoreapi-c5555.appspot.com",
  messagingSenderId: "568925639239",
  appId: "1:568925639239:web:58e0f84d1b9bcbe5d05762",
  measurementId: "G-F12L3M36TH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth }
