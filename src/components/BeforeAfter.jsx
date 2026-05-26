import React from 'react';
import { motion } from 'framer-motion';
import './BeforeAfter.css';

export default function BeforeAfter() {
  const images = [
    { src: "/imagens/2.jpeg", alt: "Caso de sucesso estético" },
    { src: "/imagens/4.jpeg", alt: "Lentes de contato dental" }
  ];

  return (
    <section className="gallery-section">
      <div className="container">
        <motion.div 
          className="gallery-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gallery-title">Obras de Arte em Forma de Sorriso</h2>
          <p className="gallery-subtitle">
            Cada transformação é um projeto exclusivo, focado em harmonia facial e naturalidade absoluta.
          </p>
        </motion.div>
      </div>
      
      <div className="gallery-scroll">
        {images.map((img, index) => (
          <motion.div 
            className="gallery-item" 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <img src={img.src} alt={img.alt} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
