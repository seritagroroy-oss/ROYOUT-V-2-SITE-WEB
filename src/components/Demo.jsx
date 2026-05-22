import { motion } from 'framer-motion';
import { Copy, ScanSearch, PartyPopper } from 'lucide-react';
import './Demo.css';

const steps = [
  { num: 1, title: "Copiez l'URL", desc: "Récupérez le lien de la vidéo YouTube.", icon: <Copy /> },
  { num: 2, title: "Analysez", desc: "RoYout détecte automatiquement les formats.", icon: <ScanSearch /> },
  { num: 3, title: "Profitez", desc: "Téléchargez en MP4 ou MP3 instantanément.", icon: <PartyPopper /> }
];

const Demo = () => {
  return (
    <section id="demo" className="demo-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gradient-text">Comment ça marche ?</h2>
          <p>Trois étapes simples pour récupérer vos médias.</p>
        </motion.div>
        
        <div className="demo-grid">
          <div className="demo-steps">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.num}
                className="step"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div className="step-num">
                  {step.icon}
                </div>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="demo-window"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="window-header">
              <div className="dots"><span></span><span></span><span></span></div>
              <div className="window-title">RoYout Demo</div>
            </div>
            <div className="window-body">
              <video autoPlay muted loop playsInline className="demo-video-file">
                <source src="/assets/3_mai_2026(1080p).mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
