// app/firebase/config.ts
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCf7NMIpmxCHgaTlDH_3VXSKI0RIOQ1334",
  authDomain: "practice-auth-9c339.firebaseapp.com",
  projectId: "practice-auth-9c339",
  storageBucket: "practice-auth-9c339.firebasestorage.app",
  messagingSenderId: "416608970569",
  appId: "1:416608970569:web:2fa0b1b697a17ab626dc98",
  measurementId: "G-9RRDYDKRHF",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
