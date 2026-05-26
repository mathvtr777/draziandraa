import React from 'react';
import { motion } from 'framer-motion';
import { Puzzle, Crown, Wrench, Stethoscope, Heart } from 'lucide-react';
import './Services.css';

export default function Services() {
  const services = [
    {
      icon: <Puzzle size={24} strokeWidth={1.5} />,
      title: "Implantes Dentários",
      text: "Reabilitação completa com implantes de última geração."
    },
    {
      icon: <Crown size={24} strokeWidth={1.5} />,
      title: "Próteses",
      text: "Próteses fixas e removíveis com estética impecável."
    },
    {
      icon: <Wrench size={24} strokeWidth={1.5} />,
      title: "Próteses sobre Implantes",
      text: "A combinação perfeita de segurança e naturalidade."
    },
    {
      icon: <Stethoscope size={24} strokeWidth={1.5} />,
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
