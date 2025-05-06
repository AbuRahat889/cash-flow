// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuv2eIP78TcAyv1fEaeqJAkcfL7MlnBe8",
  authDomain: "cash-flow-e4fcb.firebaseapp.com",
  projectId: "cash-flow-e4fcb",
  storageBucket: "cash-flow-e4fcb.firebasestorage.app",
  messagingSenderId: "366806747487",
  appId: "1:366806747487:web:95d7ac2893d4216b8f8eea",
  measurementId: "G-2E9HTJGY8S",
};  

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  
export { auth, provider };
