import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDAZI8n2UTTfu0mqhakpGAyC_dXnK58CL4",
  authDomain: "tp2-react.firebaseapp.com",
  projectId: "tp2-react",
  storageBucket: "tp2-react.appspot.com",
  messagingSenderId: "536524836153",
  appId: "1:536524836153:web:f10326958bfaf4a08cace8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
