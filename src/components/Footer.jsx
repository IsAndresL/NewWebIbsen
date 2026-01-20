import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1B5E20] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-display font-bold mb-2">ASOCURID</h2>
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Asociación Cultural Ibsen Díaz Viloria.<br/>
              Todos los derechos reservados.
            </p>
            <div className="flex gap-4 mt-3 text-sm justify-center md:justify-start">
              <a href="#pqrs" className="text-gray-300 hover:text-primary transition-colors">PQRS</a>
              <span className="text-gray-500">|</span>
              <a href="#transparency" className="text-gray-300 hover:text-primary transition-colors">Transparencia</a>
            </div>
            <p className="text-gray-400 text-xs mt-2">Desarrollado por Ing. Andres Luna</p>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <div className="flex items-center justify-center md:justify-end gap-4 text-xl">
              <a href="#" className="hover:text-primary transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-primary transition-colors"><FaInstagram /></a>
            </div>
            
            <div className="text-gray-300 text-sm flex flex-col md:items-end gap-1">
              <a href="tel:+573000000000" className="flex items-center gap-2 hover:text-white"><FaPhone className="text-xs" /> +57 300 123 4567</a>
              <a href="mailto:info@asocurid.org" className="flex items-center gap-2 hover:text-white"><FaEnvelope className="text-xs" /> info@asocurid.org</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
