// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv2VhbOyrlVMqNu100t7cV9qRSlxXLj8E",
  authDomain: "firebsefirst.firebaseapp.com",
  projectId: "firebsefirst",
  storageBucket: "firebsefirst.firebasestorage.app",
  messagingSenderId: "424787066575",
  appId: "1:424787066575:web:f0ac83bb777fa0269f01ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
