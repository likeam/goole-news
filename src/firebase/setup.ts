
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBR2-W2KeyDvVaZSXyk4sSdncxXVnPN1ms",
  authDomain: "news-95920.firebaseapp.com",
  projectId: "news-95920",
  storageBucket: "news-95920.appspot.com",
  messagingSenderId: "541850481931",
  appId: "1:541850481931:web:cbec84889da8c1d2711e0e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googlePrivider = new GoogleAuthProvider()