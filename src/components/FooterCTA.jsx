import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Phone, MessageCircle, Calendar } from 'lucide-react';
import './FooterCTA.css';

export default function FooterCTA() {
  const [showSticky, setShowSticky] = useState(false);

  const zapLink = "https://api.whatsapp.com/send/?phone=5584994155480&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+na+ZM+Odontologia%21+%3A%29&type=phone_number&app_absent=0";
  const rjLink = "https://api.whatsapp.com/message/XJKC4INXHNPOM1?autoload=1&app_absent=0";
  const natalOnlineLink = "https://agenda.link/online_scheduling/zmodontologia/";

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button after scrolling down 300px
      if (window.scrollY > 300) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer className="footer-cta-section">
        <div className="container">
          <motion.div 
            className="cta-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="cta-title">Agende sua Avaliação</h2>
            <p className="cta-text">
              Dê o primeiro passo para o sorriso que você sempre desejou. Nossa equipe está pronta para recebê-lo com exclusividade.
            </p>
            <a href={zapLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none' }}>
              Falar pelo WhatsApp <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </a>
          </motion.div>
        </div>
        
        <div className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <h3 className="footer-col-title">Dra. Ziandra Montenegro</h3>
                <p className="footer-link">Odontologia estética de luxo e naturalidade. Transformando sorrisos com arte e ciência.</p>
              </div>
              <div className="footer-col">
                <h3 className="footer-col-title">Unidades e Contato</h3>
                <a href={rjLink} target="_blank" rel="noopener noreferrer" className="footer-link">
                  <MapPin size={14} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Copacabana, RJ (WhatsApp)
                </a>
                <a href={zapLink} target="_blank" rel="noopener noreferrer" className="footer-link">
                  <MapPin size={14} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Natal, RN (WhatsApp)
                </a>
                <a href={natalOnlineLink} target="_blank" rel="noopener noreferrer" className="footer-link">
                  <Calendar size={14} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Agendamento Online (Natal)
                </a>
              </div>
            </div>
            <div className="footer-bottom">
              &copy; {new Date().getFullYear()} Dra. Ziandra Montenegro. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showSticky && (
          <motion.div 
            className="sticky-cta-wrapper"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', bounce: 0.3 }}
          >
            <a href={zapLink} target="_blank" rel="noopener noreferrer" className="sticky-cta-btn glass-panel" style={{ textDecoration: 'none' }}>
              <MessageCircle size={20} style={{ marginRight: '8px' }} />
              Agendar Avaliação
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
