// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW1dG1tgSAy24EScmr79MSFJGiEO4Q0vY",
  authDomain: "netflixclone-a1c67.firebaseapp.com",
  projectId: "netflixclone-a1c67",
  storageBucket: "netflixclone-a1c67.firebasestorage.app",
  messagingSenderId: "291181212251",
  appId: "1:291181212251:web:a807edcf9e61e52483857e",
  measurementId: "G-0QL0D8VY9K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
