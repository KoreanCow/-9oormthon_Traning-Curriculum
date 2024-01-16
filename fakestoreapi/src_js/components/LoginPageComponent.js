import React, { useState } from 'react';
import { auth } from '../firebase/firebase.js';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

const LoginPageComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(user);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h3>로그인</h3>
      <input placeholder='email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input placeholder='Password'
        onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>로긘</button>
      <div>User Logged In : {user?.email}</div>
    </div>
  );
};

export default LoginPageComponent;
