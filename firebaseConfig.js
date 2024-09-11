// firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHi69ma75tPxoqo0uSs0sbNkLSL994G-s",
  authDomain: "laservitk-90445.firebaseapp.com",
  projectId: "laservitk-90445",
  storageBucket: "laservitk-90445.appspot.com",
  messagingSenderId: "255486163662",
  appId: "1:255486163662:web:ee81a8b9b115f3e427ae9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };