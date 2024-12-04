import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js'
import { getAuth,createUserWithEmailAndPassword,onAuthStateChanged ,updateProfile ,sendEmailVerification ,signInWithEmailAndPassword,sendPasswordResetEmail,signOut,GoogleAuthProvider,signInWithPopup     } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js'
import { getFirestore,collection, addDoc,doc, setDoc,updateDoc,serverTimestamp,getDoc,arrayUnion,getDocs,query, where,orderBy } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js'

  const firebaseConfig = {
    apiKey: "AIzaSyBnTEWv9BhOCsHFb0PX-qERFBDpVwRxbxw",
    authDomain: "hackathon-js.firebaseapp.com",
    projectId: "hackathon-js",
    storageBucket: "hackathon-js.firebasestorage.app",
    messagingSenderId: "369487086159",
    appId: "1:369487086159:web:0c38d8748a080726fda03a"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth();

  const db = getFirestore(app);

  export{
    getAuth,
    createUserWithEmailAndPassword ,
    onAuthStateChanged ,
    updateProfile ,
    sendEmailVerification,
    signInWithEmailAndPassword ,
    sendPasswordResetEmail,
    signOut,
    GoogleAuthProvider,
    signInWithPopup ,
    getFirestore,
    collection,
    addDoc,
    doc, 
    setDoc,
    updateDoc,
    serverTimestamp,
    getDoc,
    arrayUnion,
    getDocs,
    query,  
    where,
    orderBy 
  }