import React, { useRef, useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs
} from "firebase/firestore";
import { auth, db } from '../config/firebase';
import ChatMessage from './ChatMessage';

function ChatRoom() {
  const dummy = useRef();
  const collectionRef = collection(db, 'messages');
  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState('');
  const [error, setError] = useState(null); // State to store the error message.

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(collectionRef);
        const messageList = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setMessages(messageList);
      } catch (error) {
        setError("An error occurred while fetching messages. Please try again later.");
      }
    };

    fetchMessages();
  }, [collectionRef]);

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    try {
      await addDoc(collectionRef, {
        text: formValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL,
      });

      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      setError("An error occurred while sending the message. Please try again later.");
    }
  }

  return (
    <>
      <main>
        {error && <p>{error}</p>}
        {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
}

export default ChatRoom;
