import React from 'react';
import logo from "../assets/Logotype.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { lang, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(lang === 'en' ? 'es' : 'en');
  };

  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-1 flex-shrink-0 items-center justify-start'>
        <img src={logo} alt="" />
      </div>
      <div className='flex flex-1 items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/jos%C3%A9-mario-salgado-41194130a/" target="_blank" rel="noopener noreferrer" className="transition hover:opacity-80"><FaLinkedin /></a>
        <a href="https://github.com/jmario157" target="_blank" rel="noopener noreferrer" className="transition hover:opacity-80"><FaGithub /></a>
        <a href="https://www.instagram.com/iamjosemario07/" target="_blank" rel="noopener noreferrer" className="transition hover:opacity-80"><FaInstagram /></a>
      </div>
      <div className='flex flex-1 items-center justify-end'>
        <button
          type="button"
          onClick={toggleLanguage}
          className="flex items-center justify-center rounded-lg p-1.5 text-3xl transition hover:scale-110 hover:bg-white/5 focus:outline-none"
          title={lang === 'en' ? 'Cambiar a español' : 'Switch to English'}
          aria-label={lang === 'en' ? 'Cambiar a español' : 'Switch to English'}
        >
          {lang === 'en' ? '🇪🇸' : '🇺🇸'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
