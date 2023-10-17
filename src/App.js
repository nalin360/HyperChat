import React, { useState, useEffect } from 'react';
import './App.css';

// import firebase from 'firebase/app';
// import { collection, orderBy, query, addDoc, serverTimestamp, getDocs } from "firebase/firestore"

import 'firebase/auth';
import 'firebase/analytics';


import { auth } from './config/firebase';
import SignOut from './components/SignOut';
import LoadContainer from './components/LoadContainer';
// import SideBar from './components/SideBar';


function App() {

  // const userPhotoURL = auth.currentUser.photoURL;
  const [user, setUser] = useState(false);
  // const [isSidebar, setisSidebar] = useState(false)
  // const fordev = true
  useEffect(() => {
    // Use the `onAuthStateChanged` method to handle authentication state
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser != null) {
        setUser(true);
      } else {
        setUser(false);
      }
      // Once the authentication state has been checked, set loading to false
      // setLoading(false);
    });
    // Unsubscribe when the component unmounts to prevent memory leaks
    return () => unsubscribe();
  }, []);

  // const handelSidebar = () => {
  //   if (isSidebar === false) {
  //     // console.log(isSidebar);
  //     setisSidebar(true)
  //   } else {
  //     setisSidebar(false)
  //   }
  // }
  return (
    <div className="App">

      <header>
        {/* <button className='user-icon'
          onClick={handelSidebar}> */}
            
            {/* <img src={userPhotoURL  || 'https://api.adorable.io/avatars/23/abott@adorable.png'}
          alt='https://api.adorable.io/avatars/23/abott@adorable.png' /> */}
        {/* </button> */}
        <h1>HyperChat</h1>
        <SignOut />
      </header>
      {/* {console.log(isSidebar)} */}
      {/* {isSidebar ? <SideBar /> : <></>} */}
      <section>
        <LoadContainer isuser={user} />
      </section>
    </div>
  );
}


export default App;
