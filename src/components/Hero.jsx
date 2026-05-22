import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>
            Le téléchargement,<br />
            <span className="gradient-text">simplifié.</span>
          </motion.h1>
          <motion.p variants={itemVariants}>
            Téléchargez vos vidéos YouTube préférées en haute qualité, instantanément et gratuitement. Pas de pub, pas de fioritures.
          </motion.p>
          <motion.div className="hero-btns" variants={itemVariants}>
            <a href="https://github.com/seritagroroy-oss/ROYOUT-V2/releases/download/v1.0/RoYout_Setup.exe" className="btn-primary">
              <Download size={20} />
              Télécharger pour Windows
            </a>
            <span className="version">Version 1.0.0 • Gratuit</span>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <div className="mockup-container">
            <video autoPlay muted loop playsInline className="mockup-video">
              <source src="/assets/3_mai_2026(1080p).mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
            <div className="video-overlay"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
