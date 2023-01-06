// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ8nmCK_63AP3DL5ZLv8xFHcha5JTKgyE",
  authDomain: "doctors-portal-3fd50.firebaseapp.com",
  projectId: "doctors-portal-3fd50",
  storageBucket: "doctors-portal-3fd50.appspot.com",
  messagingSenderId: "862834693588",
  appId: "1:862834693588:web:150cf219104ea680dc7241"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;