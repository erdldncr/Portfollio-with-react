import React from 'react'
import {Link} from 'react-router-dom'
import avatar from '../soft.jpg'
import { FaHome, FaToggleOff, FaToggleOn, } from 'react-icons/fa'
import {useGlobalContext} from './Context.js'

export default function Navbar() {
    const {darkMode,toogleDarkMode}=useGlobalContext()
    
    return (
        <header className={`header-${darkMode?`dark`:`light`}`} >
            <nav>
          
                <ul className="link-container">
                    <li>
                        <Link className={`${darkMode?'dark':'light'}`} to='/home' > Home </Link>
                    </li>
                    <li>
                        <Link className={`${darkMode?'dark':'light'}`} to='/projects'> Projects </Link>
                    </li>
                    <li>
                        <Link className={`${darkMode?'dark':'light'}`} to='/about' >About</Link>
                    </li>
                    <li>
                        <Link className={`${darkMode?'dark':'light'}`} to='/contact' >Contact</Link>
                    </li>
                </ul>
         
            </nav>
            <div className={`context ${darkMode?'dark':'light'}`}>
                <div className="image-container">
                    <img src={avatar} alt=""/>
                </div>
                <h2>Erdal Dincer</h2>
                <p>Full Stack Web Developer</p>

            </div>
            <div >
            {darkMode?<FaToggleOff className='toggle-btn' onClick={toogleDarkMode} />:<FaToggleOn onClick={toogleDarkMode} className='toggle-btn' />}
                <Link  to='/home'>    
                   <FaHome  className={`home-btn  ${darkMode?'dark':'light'}`} />
                </Link>
            </div>
        </header>
    )
}
