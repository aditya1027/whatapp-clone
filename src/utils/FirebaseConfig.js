import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCex-GZ7D1dahDKvhdb104cN9R1Ylinaqg",
  authDomain: "whatsapp-clone-dd5be.firebaseapp.com",
  projectId: "whatsapp-clone-dd5be",
  storageBucket: "whatsapp-clone-dd5be.appspot.com",
  messagingSenderId: "199542886301",
  appId: "1:199542886301:web:2c167150513a4e076ea974",
  measurementId: "G-W8WEPRKQTW",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
