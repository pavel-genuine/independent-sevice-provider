// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA10MphLKViVBNuFg5uhYCP5FICwOpt170",
  authDomain: "fir-red-onion.firebaseapp.com",
  projectId: "fir-red-onion",
  storageBucket: "fir-red-onion.appspot.com",
  messagingSenderId: "518733893060",
  appId: "1:518733893060:web:6e81931a403dd48130a891"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;