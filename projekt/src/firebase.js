// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIjhlQIPr8sMjqP2dbpXGcgm_YIhV5ttw",
  authDomain: "wasserstand-app.firebaseapp.com",
  projectId: "wasserstand-app",
  storageBucket: "wasserstand-app.appspot.com",
  messagingSenderId: "746726153416",
  appId: "1:746726153416:web:13b1b925b2f22378e919fd",
  measurementId: "G-RX9X4XK6R9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);