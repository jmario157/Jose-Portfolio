import React from 'react';
import logo from "../assets/Logotype.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

const navbar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
      <img src={logo} alt="" />
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <a href="https://www.linkedin.com/in/jos%C3%A9-mario-salgado-41194130a/"><FaLinkedin/></a>
      <a href="https://github.com/jmario157"><FaGithub/></a>
      <a href="https://www.instagram.com/iamjosemario07/"><FaInstagram/></a>
    </div>
  </nav>
}

export default navbar