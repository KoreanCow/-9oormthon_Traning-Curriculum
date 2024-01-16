import React from 'react'
import './HeaderComponents.scss'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase'
import { useDispatch } from 'react-redux';
import { logoutSuccess } from '../reducer/actions';

const HeaderComponents = () => {

  const dispatch = useDispatch();

  const logout = async () => {
    await signOut(auth);
    dispatch(logoutSuccess());
  }
  return (
    <div className='header-box'>
      <Link
        to='/'
        className='logo'>
        Shop
      </Link>
      <div className='menus'>
        <Link
          to='/cart'>Cart</Link>
        <Link to='/login'>Login</Link>
        <span
          onClick={logout}>exit</span>
      </div>
    </div>
  )
}

export default HeaderComponents
