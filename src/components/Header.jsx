import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/img/logo_main.png'; // Placeholder path

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Eventos', href: '#events' },
    { name: 'PQRS', href: '#pqrs' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center">
            {/* If logo image exists, use it, else text fallback for dev */}
             <img src={logo} alt="ASOCURID Logo" className="h-12 w-auto object-contain" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block'}} />
             <span className="hidden text-xl font-bold font-display text-primary ml-2">ASOCURID</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-semibold text-sm uppercase tracking-wide transition-colors duration-300 ${scrolled ? 'text-neutral hover:text-secondary' : 'text-white hover:text-primary'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
           {isOpen ? <FaTimes className={scrolled ? 'text-neutral' : 'text-white'} /> : <FaBars className={scrolled ? 'text-neutral' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in-down">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="font-display font-bold text-neutral hover:text-secondary text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
