import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Heart } from 'lucide-react';
import './Benefits.css';

export default function Benefits() {
  const benefits = [
    {
      icon: <Sparkles size={28} strokeWidth={1.5} />,
      title: "Estética Natural",
      description: "Resultados imperceptíveis e harmônicos que valorizam seus traços originais com elegância."
    },
    {
      icon: <Heart size={28} strokeWidth={1.5} />,
      title: "Atendimento Exclusivo",
      description: "Uma experiência de luxo, com foco total no seu conforto, bem-estar e desejos pessoais."
    },
    {
      icon: <Shield size={28} strokeWidth={1.5} />,
      title: "Saúde em Primeiro Lugar",
      description: "Beleza aliada à função. Protocolos rigorosos para garantir a saúde duradoura do seu sorriso."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="benefits-section">
      <div className="container">
        <motion.div 
          className="benefits-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {benefits.map((item, index) => (
            <motion.div variants={itemVariants} className="benefit-card glass-panel" key={index}>
              <div className="benefit-icon">
                {item.icon}
              </div>
              <h3 className="benefit-title">{item.title}</h3>
              <p className="benefit-text">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
