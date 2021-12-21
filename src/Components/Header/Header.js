import React from 'react'
import './Header.css';
import { FaUserCircle } from 'react-icons/fa'

function Header() {
    return (
        <div className='header'>
            <div className="logo">
                <img 
                    src='https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg'
                    alt='logo'
                    />
            </div>
            <div className='user'>
                <FaUserCircle/>
            </div>
        </div>
    )
}

export default Header
