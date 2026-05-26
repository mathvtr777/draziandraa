import React from 'react';
import { motion } from 'framer-motion';
import './Mentorship.css';

export default function Mentorship() {
  return (
    <section className="mentorship-section">
      <div className="container">
        <motion.div 
          className="mentorship-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mentorship-images">
            <motion.div 
              className="mentorship-img-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img src="/imagens/7.jpeg" alt="Mentoria presencial" />
            </motion.div>
            <motion.div 
              className="mentorship-img-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img src="/imagens/8.jpeg" alt="Detalhe do curso" />
            </motion.div>
          </div>
          
          <motion.div 
            className="mentorship-content glass-panel"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="mentorship-label">Educação Profissional</div>
            <h2 className="mentorship-title">Mentoria Elite</h2>
            <p className="mentorship-text">
              Para colegas de profissão que buscam elevar o padrão dos seus tratamentos. 
              Nossa mentoria presencial oferece uma imersão completa em técnicas avançadas 
              de resinas compostas e facetas de porcelana, com foco na naturalidade extrema.
            </p>
            <p className="mentorship-text">
              Compartilhamos nossa filosofia de trabalho, protocolos clínicos exclusivos 
              e a visão artística que diferencia um sorriso comum de uma verdadeira obra de arte.
            </p>
            <button className="btn-primary" style={{marginTop: '1rem'}}>Saber Mais</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
