// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIwEvPUun7OmINExvBC6b9Adto8J0xv2Y",
  authDomain: "iblog-yesui.firebaseapp.com",
  projectId: "iblog-yesui",
  storageBucket: "iblog-yesui.appspot.com",
  messagingSenderId: "295929175895",
  appId: "1:295929175895:web:989e6b132497a16d70a812"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);