// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9Sa8EjrZN38ilKkQSl5j2vSrz-Evly18",
  authDomain: "email-password-auth-cda31.firebaseapp.com",
  projectId: "email-password-auth-cda31",
  storageBucket: "email-password-auth-cda31.firebasestorage.app",
  messagingSenderId: "1053532057323",
  appId: "1:1053532057323:web:82b1b6262c45d3395b58ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);