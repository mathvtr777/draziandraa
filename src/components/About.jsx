import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section className="about-section">
      <motion.div 
        className="about-image-wrapper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <img src="/imagens/5.jpeg" alt="Dra. Ziandra Montenegro" className="about-bg-img" />
        
        <motion.div 
          className="about-glass-card glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="about-title">
            Sua Essência, <span>Elevada</span>
          </h2>
          <p className="about-text">
            Com mais de uma década de dedicação à odontologia estética, nosso foco é transcender o comum. Não entregamos apenas dentes brancos, esculpimos sorrisos que refletem a sua verdadeira identidade.
          </p>
          <p className="about-text">
            Utilizando tecnologia de ponta e uma visão artística apurada, cada tratamento é desenhado de forma única. O luxo está nos detalhes imperceptíveis que tornam o seu sorriso inesquecível e perfeitamente natural.
          </p>
          <div className="about-signature">Dra. Ziandra Montenegro</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
