// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8epbODbsP7lhrQ-xplpFst37VA6yVvNU",
  authDomain: "favbook-394ac.firebaseapp.com",
  projectId: "favbook-394ac",
  storageBucket: "favbook-394ac.appspot.com",
  messagingSenderId: "45724928690",
  appId: "1:45724928690:web:03d65e50933c63e0df97ab",
  measurementId: "G-0QYV12EF60"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
export default app;

//Authentication
export {auth};
