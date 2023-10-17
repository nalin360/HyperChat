import React from 'react'
import ChatRoom from './ChatRoom';
import SignIn from './SignIn';

function LoadContainer({ isuser }) {
    if (isuser) {
      return <ChatRoom />;
    }
    return <SignIn />;
  }
  

export default LoadContainer