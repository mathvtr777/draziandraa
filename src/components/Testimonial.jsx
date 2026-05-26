import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonial.css';

export default function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-overlay"></div>
      <div className="container">
        <motion.div 
          className="testimonial-content glass-panel"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <Quote className="testimonial-icon" size={48} strokeWidth={1} />
          <blockquote className="testimonial-quote">
            "A verdadeira elegância na estética dental é quando o mundo percebe a sua beleza, mas não percebe a intervenção."
          </blockquote>
          <div className="testimonial-author">Dra. Ziandra Montenegro</div>
        </motion.div>
      </div>
    </section>
  );
}
