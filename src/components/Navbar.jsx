import { useState } from 'react';
import './Navbar.css';
import { Download, ChevronDown, Play, Share2, MessageCircle, Users } from 'lucide-react';

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
                <a href="#" target="_blank" rel="noreferrer"><Play size={16}/> YouTube</a>
                <a href="#" target="_blank" rel="noreferrer"><Share2 size={16}/> Facebook</a>
                <a href="#" target="_blank" rel="noreferrer"><Users size={16}/> Groupe WhatsApp</a>
                <a href="https://whatsapp.com/channel/0029VbCS9BhGufIn5JrmVc1R" target="_blank" rel="noreferrer"><MessageCircle size={16}/> Chaîne WhatsApp</a>
              </div>
            )}
          </div>

          <a href="#support">Soutenir</a>
          <a href="https://github.com/seritagroroy-oss/ROYOUT-V2/releases/download/v1.0/RoYout_Setup.exe" className="btn-small">
            <Download size={16} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'text-bottom' }} />
            Télécharger
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
