import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCcCB9QERsIELFh1FPs_EpfV0MeSA8f4Yk",
  authDomain: "cwmobile-c087e.firebaseapp.com",
  databaseURL: "https://cwmobile-c087e-default-rtdb.firebaseio.com",
  projectId: "cwmobile-c087e",
  storageBucket: "cwmobile-c087e.firebasestorage.app",
  messagingSenderId: "978626904768",
  appId: "1:978626904768:web:9d129d93ba94ce96936325",
  measurementId: "G-X8ZYFZLC7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app, firebaseConfig };
