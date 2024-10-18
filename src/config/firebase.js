// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATvnYht8r1ob6Y-H_1WqScVSNcWYoOtEg",
  authDomain: "vite-contact-dbf97.firebaseapp.com",
  projectId: "vite-contact-dbf97",
  storageBucket: "vite-contact-dbf97.appspot.com",
  messagingSenderId: "908298285250",
  appId: "1:908298285250:web:8fab5306622f13b66c4b5b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)