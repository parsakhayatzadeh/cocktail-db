import React from 'react'
import { Link } from 'react-router-dom'
const Navabr = () => {
  return (
    <nav className='navbar'>
        <div className='nav-center'>
            <img src="../../public/logo.svg" alt="" className='logo'/>
        </div>
        <ul className='nav-links'>
            <li>
                <Link to="/">home</Link>
            </li>
            <li>
                <Link to="/about">about</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navabr