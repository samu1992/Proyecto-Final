import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI3ofz9Fbrfwa9xj_ImrQkOS-B_jjCDTk",
  authDomain: "react-ecommerce-6e21c.firebaseapp.com",
  projectId: "react-ecommerce-6e21c",
  storageBucket: "react-ecommerce-6e21c.appspot.com",
  messagingSenderId: "153832395007",
  appId: "1:153832395007:web:624992ede7d61168bf7cca"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* <React.StrictMode> */
    <App />
  /* </React.StrictMode> */
);


