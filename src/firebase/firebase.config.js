// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4_ItsTx-r4iFuIWH0fKDX4dVay1VyVhU",
  authDomain: "cosmetic-and-beauty.firebaseapp.com",
  projectId: "cosmetic-and-beauty",
  storageBucket: "cosmetic-and-beauty.appspot.com",
  messagingSenderId: "901186345403",
  appId: "1:901186345403:web:b7b2900dcf377a3df5cc9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;