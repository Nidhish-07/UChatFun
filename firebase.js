// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQUU1d7EHp9T3VAzCpwhb8krYul5-z2G8",
  authDomain: "chat-app-724bf.firebaseapp.com",
  projectId: "chat-app-724bf",
  storageBucket: "chat-app-724bf.appspot.com",
  messagingSenderId: "293671707551",
  appId: "1:293671707551:web:2b0fbaf556711666db53aa",
  measurementId: "G-D388XLFMEL",
};

// Initialize Firebase

let app;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = firebase.getApp();
}

export const db = getFirestore(app);
export const auth = getAuth(app);

const analytics = getAnalytics(app);
