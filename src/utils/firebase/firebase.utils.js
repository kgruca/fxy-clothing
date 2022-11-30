import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBrpdFXuN6YG8Id6tq34Z3UVknfPTAJ1Bk",
    authDomain: "fxy-clothing-db.firebaseapp.com",
    projectId: "fxy-clothing-db",
    storageBucket: "fxy-clothing-db.appspot.com",
    messagingSenderId: "1021214533129",
    appId: "1:1021214533129:web:fad24246224c6f932e3ad8"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);