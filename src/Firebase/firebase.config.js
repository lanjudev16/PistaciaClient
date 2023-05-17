// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHzDU9Dhhodimf7hit3djXy1xck3GXgRs",
  authDomain: "toy-marketplace-cfbbd.firebaseapp.com",
  projectId: "toy-marketplace-cfbbd",
  storageBucket: "toy-marketplace-cfbbd.appspot.com",
  messagingSenderId: "607983365109",
  appId: "1:607983365109:web:b33b5188a5a284c7300ebc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app