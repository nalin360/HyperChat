import React from 'react'
import { auth } from '../config/firebase'

function SignOut() {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }

export default SignOut