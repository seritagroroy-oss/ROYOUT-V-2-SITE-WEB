import { FaYoutube, FaFacebook, FaWhatsapp, FaUsers } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo-footer">
            <img src="/assets/logo.png" alt="RoYout Logo" />
            <span>RoYout</span>
          </div>
          <p className="footer-slogan">Le téléchargement, simplifié.</p>
          <p className="footer-author">Conçu avec passion par <span className="author-name">SERI TAGRO ROY</span></p>
        </div>
        
        <div className="footer-community">
          <h3>Rejoindre notre communauté</h3>
          <p>Restez informé des dernières mises à jour et nouveautés !</p>
          <div className="social-links">
            <a href="#" target="_blank" rel="noreferrer" className="social-icon yt" title="YouTube"><FaYoutube size={20} /></a>
            <a href="#" target="_blank" rel="noreferrer" className="social-icon fb" title="Facebook"><FaFacebook size={20} /></a>
            <a href="https://chat.whatsapp.com/Lvz6ScCPkOg6EjGlrX9pP9" target="_blank" rel="noreferrer" className="social-icon wa-group" title="Groupe WhatsApp"><FaUsers size={20} /></a>
            <a href="https://whatsapp.com/channel/0029VbCS9BhGufIn5JrmVc1R" target="_blank" rel="noreferrer" className="social-icon wa-channel" title="Chaîne WhatsApp"><FaWhatsapp size={20} /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RoYout. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
