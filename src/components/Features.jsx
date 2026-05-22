import { motion } from 'framer-motion';
import { Zap, Unlock, MonitorPlay } from 'lucide-react';
import './Features.css';

const featuresData = [
  {
    id: 1,
    title: 'Ultra Rapide',
    description: 'Moteur optimisé pour une vitesse de téléchargement maximale sans bridage.',
    icon: <Zap size={28} />,
    color: 'red'
  },
  {
    id: 2,
    title: 'Gratuit & Illimité',
    description: 'Aucun abonnement requis. Téléchargez autant de vidéos que vous le souhaitez.',
    icon: <Unlock size={28} />,
    color: 'purple'
  },
  {
    id: 3,
    title: 'Haute Définition',
    description: 'Supporte le 4K, 1080p et l\'extraction audio MP3 haute fidélité (320kbps).',
    icon: <MonitorPlay size={28} />,
    color: 'orange'
  }
];

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gradient-text">Pourquoi choisir RoYout ?</h2>
          <p>Des performances inégalées, sans aucun compromis.</p>
        </motion.div>

        <div className="grid-features">
          {featuresData.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, borderColor: 'rgba(255, 0, 68, 0.3)' }}
            >
              <div className={`icon-box ${feature.color}`}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
