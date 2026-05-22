import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} RoYout - Le téléchargement, simplifié.</p>
        <p>Conçu avec passion par <span className="author-name">SERI TAGRO ROY</span></p>
      </div>
    </footer>
  );
};

export default Footer;
