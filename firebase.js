// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  measurementId: "G-D388XLFMEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);