import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signOut ,signInWithRedirect} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// console.log(process.env.REACT_APP_API_KEY);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// console.log(typeof(process.env.REACT_APP_API_KEY));
// console.log(apiKey); 
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);

// console.log(auth);

// * auth with googole
export const signInWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();
  // googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  // console.log("Hih");
  // console.log(googleProvider);

  await signInWithRedirect(auth, googleProvider)
   

}
// * Sign out 

export const handleSignOut = async () => {
  await signOut(auth)
    .then(() => {
      // sign out successful
      console.log("Sign-out successful.");
    })
    .catch((error) => {
      console.log("An error happened:", error);
    });
};

export default app;