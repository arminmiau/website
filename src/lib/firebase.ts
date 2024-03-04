import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4uW_r7gExE0nSquptjbzy1URwtJqTvUs",
  authDomain: "arminmiau-website.firebaseapp.com",
  projectId: "arminmiau-website",
  storageBucket: "arminmiau-website.appspot.com",
  messagingSenderId: "520917034176",
  appId: "1:520917034176:web:8ee85bfb190fe5bba17925",
  measurementId: "G-MSFZCSFVRP"
};

export const app = () => initializeApp(firebaseConfig);