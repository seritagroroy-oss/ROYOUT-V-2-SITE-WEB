import { useState } from 'react';
import './Navbar.css';
import { Download, ChevronDown } from 'lucide-react';
import { FaYoutube, FaFacebook, FaWhatsapp, FaUsers } from 'react-icons/fa';
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-flex">
        <div className="logo">
          <img src="/assets/logo.png" alt="RoYout Logo" />
          <span className="brand">RoYout</span>
        </div>
        <div className="nav-links">
          <a href="#features">Fonctionnalités</a>
          <a href="#demo">Démo</a>
          <a href="#about">À propos</a>
          <a href="#faq">FAQ</a>
          
          <div 
            className="dropdown" 
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="dropdown-btn">
              Communauté <ChevronDown size={14} style={{ marginLeft: '4px', verticalAlign: 'middle' }}/>
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <a href="https://www.youtube.com/@Tuto-Days" target="_blank" rel="noreferrer"><FaYoutube size={16}/> YouTube</a>
                <a href="https://www.facebook.com/profile.php?id=61570719261860" target="_blank" rel="noreferrer"><FaFacebook size={16}/> Facebook</a>
                <a href="https://chat.whatsapp.com/Lvz6ScCPkOg6EjGlrX9pP9" target="_blank" rel="noreferrer"><FaUsers size={16}/> Groupe WhatsApp</a>
                <a href="https://whatsapp.com/channel/0029VbCS9BhGufIn5JrmVc1R" target="_blank" rel="noreferrer"><FaWhatsapp size={16}/> Chaîne WhatsApp</a>
              </div>
            )}
          </div>

          <a href="#support">Soutenir</a>
          <a href="https://github.com/seritagroroy-oss/ROYOUT-V2/releases/download/v1.2.0/RoYout_Setup.exe" className="btn-small">
            <Download size={16} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'text-bottom' }} />
            Télécharger
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
