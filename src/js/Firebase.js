import { initializeApp } from 'firebase/app';
import { getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';



const firebaseConfig = {
    apiKey: "AIzaSyBX0VC7jo9POtOjdGimX5OydEbK2m4k6-U",
    authDomain: "mimic-e-shop-site.firebaseapp.com",
    projectId: "mimic-e-shop-site",
    storageBucket: "mimic-e-shop-site.appspot.com",
    messagingSenderId: "157286537323",
    appId: "1:157286537323:web:98e88b5e10aac5233db92e",
    measurementId: "G-TH7P7DP1ZZ"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore();

  const auth = getAuth();

  export {db, auth,};