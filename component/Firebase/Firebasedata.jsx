import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOlrEo49DhFIQN9SrTqpK9nSdZEEFhD38",
  authDomain: "resumemaker-4c770.firebaseapp.com",
  projectId: "resumemaker-4c770",
  storageBucket: "resumemaker-4c770.firebasestorage.app",
  messagingSenderId: "373361235745",
  appId: "1:373361235745:web:079df3b64ec4fcfe0f1060",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
