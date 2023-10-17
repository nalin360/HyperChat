import React from 'react'
import { signInWithGoogle } from '../config/firebase'

function SignIn() {

    // const signInWithGoogle = async() => {
    //   const googleProvider = new GoogleAuthProvider();
    //   await signInWithPopup(auth, googleProvider)
    // }
  
    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        <p>Do not violate the community guidelines or you will be banned for life!</p>
      </>
    )
  
  }

export default SignIn