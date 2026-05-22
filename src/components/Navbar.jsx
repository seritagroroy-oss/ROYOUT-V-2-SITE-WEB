import './Navbar.css';
import { Download } from 'lucide-react';

const Navbar = () => {
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
