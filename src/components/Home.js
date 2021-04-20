import React,{useRef,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { useGlobalContext } from './Context'
export default function Home() {
  const{smallScreen,toogleSmallScreen}=useGlobalContext()
  const ulRef=useRef('')
    useEffect(() => {
      console.log(ulRef.current.getBoundingClientRect().width)
    },[])

    return (
        <nav>
          <ul ref={ulRef} className={`${smallScreen?'show':'hidden'}`} >
            <li><a href="#h">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <FaBars onClick={toogleSmallScreen} className='icon'/>
        </nav>
    )
}
