import React from 'react'
import './HeaderComponents.scss'
import { Link } from 'react-router-dom'
const HeaderComponents = () => {
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
        <span>user</span>
        <span>exit</span>
      </div>
    </div>
  )
}

export default HeaderComponents
