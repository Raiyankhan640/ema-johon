import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBT67dWOqdLuOx9gN3gvVnmpB7ROcyLmoE",
  authDomain: "ema-john-e7f8a.firebaseapp.com",
  projectId: "ema-john-e7f8a",
  storageBucket: "ema-john-e7f8a.appspot.com",
  messagingSenderId: "193679956666",
  appId: "1:193679956666:web:2fea7e8bc8d3d1937e0083",
  measurementId: "G-WXB7JYR69V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);