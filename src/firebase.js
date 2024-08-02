// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGoS-oqTukMqwgDSZlqvOvmJrgXQBCEzk",
  authDomain: "servicebased-e2d04.firebaseapp.com",
  projectId: "servicebased-e2d04",
  storageBucket: "servicebased-e2d04.appspot.com",
  messagingSenderId: "782283803850",
  appId: "1:782283803850:web:d6952f7f0af9a894c6f833",
  measurementId: "G-3G3JTR1GBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);