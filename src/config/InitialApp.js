// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUPQ0OBqlt0BAYW38AlQRLP4wj1icsAx4",
  authDomain: "nativeapp-b16e8.firebaseapp.com",
  projectId: "nativeapp-b16e8",
  storageBucket: "nativeapp-b16e8.appspot.com",
  messagingSenderId: "581403705834",
  appId: "1:581403705834:web:c3e4fc88ce82ad803cb293",
  measurementId: "G-ZHB108SYXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export default auth;