// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJMqYjTXZuBYGXR7y4cQOGtSeiOm7oI6Q",
  authDomain: "forgeflow-ml-27622.firebaseapp.com",
  projectId: "forgeflow-ml-27622",
  storageBucket: "forgeflow-ml-27622.appspot.com",
  messagingSenderId: "499679463863",
  appId: "1:499679463863:web:37fa45eb99c5e23f194032",
  measurementId: "G-8QT8D75W25"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);


export { app, auth, analytics };
