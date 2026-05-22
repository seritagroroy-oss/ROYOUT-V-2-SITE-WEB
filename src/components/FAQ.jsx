import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    q: "Est-ce que RoYout est vraiment gratuit ?",
    a: "Oui, RoYout est 100% gratuit. Il n'y a aucun frais d'inscription, ni de fonctionnalités premium cachées. L'outil a été développé par SERI TAGRO ROY dans un esprit de partage et de performance."
  },
  {
    q: "Quels formats de fichiers sont supportés ?",
    a: "Vous pouvez télécharger vos vidéos en format MP4 ou WebM. Pour l'audio uniquement, l'application propose une conversion directe en MP3 de haute qualité (320 kbps)."
  },
  {
    q: "Puis-je télécharger des vidéos en 4K ?",
    a: "Absolument. Si la vidéo d'origine est disponible en 4K ou en 1080p, RoYout vous permettra de sélectionner ces résolutions. L'application se charge de fusionner automatiquement la vidéo et l'audio pour vous offrir le meilleur rendu possible."
  },
  {
    q: "L'application fonctionne-t-elle sur Mac et Windows ?",
    a: "La version actuelle est optimisée pour Windows. Une version pour d'autres systèmes d'exploitation est à l'étude pour permettre à tout le monde de profiter de l'expérience RoYout."
  },
  {
    q: "Pourquoi mon antivirus bloque-t-il parfois l'installation ?",
    a: "Comme RoYout est un logiciel indépendant et récent, il n'est pas encore \"signé\" par les grands éditeurs. Il est donc possible que Windows SmartScreen affiche une alerte. Vous pouvez ignorer ce message en cliquant sur \"Informations complémentaires\" puis \"Exécuter quand même\". Soyez assuré que l'application est sûre et sans aucun logiciel malveillant."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gradient-text">Foire Aux Questions (FAQ)</h2>
          <p>Tout ce que vous devez savoir sur RoYout.</p>
        </motion.div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button className="faq-summary" onClick={() => toggleFAQ(index)}>
                {faq.q}
                <motion.span 
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown />
                </motion.span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    className="faq-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
