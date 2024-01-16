import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';

interface User {
  email: string | null; // email 속성에 null이 가능하도록 수정
}

const LoginPageComponent = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== null) {
        setUser({
          email: currentUser.email,
        });
      }
    })
    return () => unsubscribe();
  }, [])

  const login = async () => {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      setUser({
        email: userCredential.user.email,
      });
      console.log(userCredential.user);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h3>로그인</h3>
      <input placeholder='email' onChange={(e) => setEmail(e.target.value)} />
      <input placeholder='Password' type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>로긘</button>
      <div>User Logged In : {user?.email}</div>
    </div>
  );
};

export default LoginPageComponent;
