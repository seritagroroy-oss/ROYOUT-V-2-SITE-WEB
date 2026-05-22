import { motion } from 'framer-motion';
import { Coffee, CreditCard } from 'lucide-react';
import './Support.css';

const Support = () => {
  return (
    <section id="support" className="support-section">
      <div className="container">
        <div className="support-grid">
          <motion.div 
            className="support-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="gradient-text">Soutenir le projet RoYout</h2>
            <div className="support-card mt-8">
              <h3>Pourquoi soutenir RoYout ?</h3>
              <p>
                RoYout est un projet indépendant développé, maintenu et mis à jour bénévolement par <span className="text-white">SERI TAGRO ROY</span>. L'application restera toujours <span className="text-white">100% gratuite et sans publicité</span>.
              </p>
              
              <div className="support-reasons">
                <div className="reason">
                  <span className="reason-icon">🚀</span>
                  <p>Améliorer les serveurs pour des téléchargements encore plus rapides.</p>
                </div>
                <div className="reason">
                  <span className="reason-icon">🛠️</span>
                  <p>Maintenir le code face aux mises à jour constantes des plateformes vidéo.</p>
                </div>
                <div className="reason">
                  <span className="reason-icon">💻</span>
                  <p>Investir dans de nouvelles fonctionnalités (comme une version mobile ou Mac).</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="support-actions"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="support-card">
              <h3>Comment contribuer ?</h3>
              <p className="mb-6">Vous pouvez faire un don du montant de votre choix via les plateformes sécurisées suivantes :</p>
              
              <div className="donation-btns">
                <a href="#" target="_blank" rel="noreferrer" className="donation-btn bmac">
                  <Coffee size={20} />
                  <span>Offrez-moi un café</span>
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="donation-btn paypal">
                  <CreditCard size={20} />
                  <span>Don via PayPal</span>
                </a>
              </div>

              <div className="local-payments">
                <h4>Paiements locaux (Côte d'Ivoire)</h4>
                <div className="local-grid">
                  <div className="local-card mtn">
                    <span className="operator">MTN Money</span>
                    <span className="number">05 54 37 75 07</span>
                  </div>
                  <div className="local-card orange">
                    <span className="operator">Orange Money</span>
                    <span className="number">07 67 17 45 41</span>
                  </div>
                  <div className="local-card moov">
                    <span className="operator">Moov Money</span>
                    <span className="number">01 40 94 59 41</span>
                  </div>
                  <div className="local-card wave">
                    <span className="operator">Wave</span>
                    <span className="number">05 54 37 75 07</span>
                  </div>
                </div>
              </div>
              
              <blockquote className="author-note">
                "Votre soutien, qu'il soit financier ou simplement un message d'encouragement, est le moteur de ce projet. Merci d'avance à tous ceux qui contribuent à faire grandir RoYout !"
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Support;
