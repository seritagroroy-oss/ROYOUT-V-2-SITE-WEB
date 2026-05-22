import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gradient-text">À propos de RoYout</h2>
          <p>L'histoire et la technique derrière l'outil.</p>
        </motion.div>

        <div className="about-grid">
          <motion.div 
            className="about-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>La Genèse du Projet</h3>
            <p>
              RoYout est né d'un constat simple : récupérer ses propres contenus ou des vidéos libres de droits devrait être une procédure rapide, fluide et sans fioritures. Conçu et développé par <span className="text-white">SERI TAGRO ROY</span>, cet outil est le fruit d'un travail passionné visant à offrir une alternative légère, performante et surtout accessible à tous.
            </p>
          </motion.div>

          <motion.div 
            className="about-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>Performance & Polyvalence</h3>
            <p>Sous le capot, RoYout utilise des algorithmes optimisés pour garantir une flexibilité maximale dans vos téléchargements :</p>
            <ul className="about-list">
              <li><CheckCircle2 size={18} className="list-icon" /><span>Haute Résolution :</span> Support complet de la 4K, 1080p et 720p.</li>
              <li><CheckCircle2 size={18} className="list-icon" /><span>Formats Vidéo :</span> Exportation native en MP4 et WebM.</li>
              <li><CheckCircle2 size={18} className="list-icon" /><span>Extraction Audio :</span> Conversion ultra-rapide en MP3 (320 kbps).</li>
              <li><CheckCircle2 size={18} className="list-icon" /><span>Gestion Intelligente :</span> Fusion automatique des flux audio/vidéo.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="about-card highlight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>100% Gratuit, Sans Compromis</h3>
            <p>L'une des valeurs fondamentales de RoYout est l'accessibilité :</p>
            <ul className="about-list">
              <li><CheckCircle2 size={18} className="list-icon primary" /> Pas d'abonnement caché.</li>
              <li><CheckCircle2 size={18} className="list-icon primary" /> Pas de fonctionnalités limitées.</li>
              <li><CheckCircle2 size={18} className="list-icon primary" /> Pas de publicités intrusives.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="about-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3>Engagement Responsable</h3>
            <p>Le respect des créateurs est essentiel. RoYout est un outil technique destiné à un usage personnel et privé. Nous encourageons nos utilisateurs à respecter les droits d'auteur et les conditions d'utilisation des plateformes.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
