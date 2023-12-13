// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8ScklDE8yNWtmh5LsXkYAeRZn-Gmn9GE",
    authDomain: "tornado-authentication-y-262ed.firebaseapp.com",
    projectId: "tornado-authentication-y-262ed",
    storageBucket: "tornado-authentication-y-262ed.appspot.com",
    messagingSenderId: "403880321766",
    appId: "1:403880321766:web:599456cb063c0f606c9127"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);