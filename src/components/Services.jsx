import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import './Services.css';

/* Custom dental SVG icons */
const ToothImplantIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C9.5 2 7 3.5 7 6.5C7 8.5 8 10 8 12C8 14 7 17 7 19C7 21 8.5 22 10 22C11.5 22 12 20 12 18" />
    <path d="M12 2C14.5 2 17 3.5 17 6.5C17 8.5 16 10 16 12C16 14 17 17 17 19C17 21 15.5 22 14 22C12.5 22 12 20 12 18" />
    <line x1="12" y1="18" x2="12" y2="14" />
    <line x1="10" y1="16" x2="14" y2="16" />
  </svg>
);

const DentalCrownIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 14C5 14 5.5 8 7 6C8 4.5 9.5 4 12 4C14.5 4 16 4.5 17 6C18.5 8 19 14 19 14" />
    <path d="M5 14C5 14 6 20 7 21C8 22 9 22 10 21C11 20 12 18 12 18C12 18 13 20 14 21C15 22 16 22 17 21C18 20 19 14 19 14" />
    <path d="M9 8L12 10L15 8" />
  </svg>
);

const ImplantScrewIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2C8 2 9 4 12 4C15 4 16 2 16 2" />
    <rect x="9" y="4" width="6" height="4" rx="1" />
    <path d="M10 8L9 10L15 10L14 8" />
    <line x1="9.5" y1="12" x2="14.5" y2="12" />
    <line x1="10" y1="14" x2="14" y2="14" />
    <line x1="10.5" y1="16" x2="13.5" y2="16" />
    <line x1="11" y1="18" x2="13" y2="18" />
    <path d="M11.5 18L11.5 21" />
    <path d="M12.5 18L12.5 21" />
  </svg>
);

const ClinicIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C9.5 2 7 3.5 7 6.5C7 8.5 8 10 8 12C8 14 7 17 7 19C7 21 8.5 22 10 22C11.5 22 12 20 12 18" />
    <path d="M12 2C14.5 2 17 3.5 17 6.5C17 8.5 16 10 16 12C16 14 17 17 17 19C17 21 15.5 22 14 22C12.5 22 12 20 12 18" />
    <circle cx="12" cy="7" r="2" />
    <path d="M12 5V9" />
    <path d="M10 7H14" />
  </svg>
);

export default function Services() {
  const services = [
    {
      icon: <ToothImplantIcon />,
      title: "Implantes Dentários",
      text: "Reabilitação completa com implantes de última geração."
    },
    {
      icon: <DentalCrownIcon />,
      title: "Próteses",
      text: "Próteses fixas e removíveis com estética impecável."
    },
    {
      icon: <ImplantScrewIcon />,
      title: "Próteses sobre Implantes",
      text: "A combinação perfeita de segurança e naturalidade."
    },
    {
      icon: <ClinicIcon />,
      title: "Clínica Geral",
      text: "Todos os serviços para a saúde completa do seu sorriso."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="services-section">
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="services-label">Nossos Serviços</span>
          <h2 className="services-title">
            Além da estética, cuidamos da sua <span>reabilitação</span>
          </h2>
          <p className="services-subtitle">
            No consultório tem tudo que o paciente precisa. Da estética mais refinada à reabilitação oral completa.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              variants={itemVariants}
              className="service-card"
              key={index}
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-text">{service.text}</p>
            </motion.div>
          ))}

          <motion.div variants={itemVariants} className="service-card highlight">
            <div className="service-icon-wrapper">
              <Heart size={24} strokeWidth={1.5} />
            </div>
            <h3 className="service-card-title">Cuidado Completo</h3>
            <p className="service-card-text">
              Tudo em um só lugar — da prevenção à transformação do seu sorriso, com atendimento humanizado e exclusivo.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
