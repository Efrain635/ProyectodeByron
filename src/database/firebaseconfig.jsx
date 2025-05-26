import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Tu configuración de Firebase aquí
const firebaseconfig = {
  apiKey: "AIzaSyCNLSKDyotqpyli0pbSkD39SI48NBdpc2o",
  authDomain: "proyecto-1-20002.firebaseapp.com",
  projectId: "proyecto-1-20002",
  storageBucket: "proyecto-1-20002.firebasestorage.app",
  messagingSenderId: "767504657893",
  appId: "1:767504657893:web:5fe9b0e83f0efd719f130c",
  measurementId: "G-8RJV74ZLF1"
};

  const appfirebase = initializeApp(firebaseconfig);

  const storage = getStorage(appfirebase);

  const db = getFirestore(appfirebase);

  const auth = getAuth(appfirebase);

  export {appfirebase,db,auth, storage};