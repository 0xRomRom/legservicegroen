// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVh14t-wBSPiRt6AaG_zYegVYNDRe5Vz8",
  authDomain: "legservice-ba2ba.firebaseapp.com",
  projectId: "legservice-ba2ba",
  storageBucket: "legservice-ba2ba.appspot.com",
  messagingSenderId: "315741976704",
  appId: "1:315741976704:web:0cd2a27f165062d294ce65",
  measurementId: "G-NG06XDF9HN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const analytics = getAnalytics(app);
