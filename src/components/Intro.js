import React from 'react'
import {Link} from 'react-router-dom'
import avatar from '../soft.jpg'
import { FaHome, } from 'react-icons/fa'
import {useGlobalContext} from './Context.js'
export default function Navbar() {
    console.log(useGlobalContext)
    return (
        <header>
            <nav>
          
                <ul className="link-container">
                    <li>
                        <Link className='dark' to='/' > Home </Link>
                    </li>
                    <li>
                        <Link className='dark' to='/projects'> Projects </Link>
                    </li>
                    <li>
                        <Link className='dark' to='/about' >About</Link>
                    </li>
                    <li>
                        <Link className='dark' to='/contact' >Contact</Link>
                    </li>
                </ul>
         
            </nav>
            <div className="context dark">
                <div className="image-container">
                    <img src={avatar} alt=""/>
                </div>
                <h2>Erdal Dincer</h2>
                <p>Full Stack Web Developer</p>

            </div>
            <div >
                
                <Link  to='/'>
                   <FaHome className="toggle-btn dark" />
                </Link>
            </div>
        </header>
    )
}
