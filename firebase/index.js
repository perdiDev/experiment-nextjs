// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1TIgcveNzgrBCJpj8lhsT0XA0RU16FqU",
  authDomain: "to-do-app-df033.firebaseapp.com",
  projectId: "to-do-app-df033",
  storageBucket: "to-do-app-df033.appspot.com",
  messagingSenderId: "1055519747282",
  appId: "1:1055519747282:web:666bff7d038776ff98110b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};