import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Users,
  Target,
  User,
  TrendingUp,
  Eye,
  MessageCircle,
  CheckCircle,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const RecruitmentLanding = () => {
  const [hoveredFeature, setHoveredFeature] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Search className="w-12 h-12" />,
      title: 'Accès rapide à des profils pré-qualifiés',
      description:
        "Gagnez du temps et recrutez efficacement grâce à notre vivier de talents déjà évalués. Chaque profil que nous mettons à votre disposition a été rigoureusement présélectionné par nos experts pour répondre à vos besoins immédiats. Résultat : moins de tri, plus d'action.",
      borderColor: 'border-green-700/50',
      iconBg: 'bg-green-100/30 animate-pulse',
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Chasse de profils rares et internationaux',
      description:
        "Confiez-nous vos besoins spécifiques, même les plus pointus. Nous partons en mission pour vous dénicher les talents rares, en local comme à l'international...",
      borderColor: 'border-orange-700/50',
      iconBg: 'bg-orange-100/30 animate-pulse',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Plateforme intuitive de tri et de matching',
      description:
        "Naviguez facilement parmi les candidatures grâce à notre interface intelligente. Notre système de matching analyse les compétences, l'expérience et la disponibilité...",
      borderColor: 'border-green-700/50',
      iconBg: 'bg-green-100/30 animate-pulse',
    },
  ];

  const steps = [
    {
      icon: <User className="w-8 h-8" />,
      title: 'Créez un profil unique',
      description:
        'Renseignez vos infos clés, ajoutez vos compétences, expériences et dispo...',
      color: 'bg-orange-500',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Valorisez vos compétences',
      description:
        'Mettez en avant ce que vous savez faire...',
      color: 'bg-green-500',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Exprimez vos expériences et vos aspirations',
      description:
        'Décrivez votre parcours et ce que vous visez...',
      color: 'bg-orange-500',
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Visibilité accrue aux recruteurs',
      description:
        "Votre profil est mis en avant auprès des recruteurs actifs...",
      color: 'bg-green-500',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Matching avec des offres ciblées',
      description:
        "Recevez des opportunités alignées avec votre profil...",
      color: 'bg-orange-500',
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Accompagnement personnalisé',
      description:
        "Bénéficiez d'un coaching sur-mesure...",
      color: 'bg-green-500',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="text-center max-w-5xl mx-auto px-6 py-20">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Des profils adaptés à vos <span className="text-orange-700/70">enjeux</span>
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-gray-600 leading-relaxed"
        >
          Chaque entreprise est unique, chaque recrutement aussi...
        </motion.p>
      </div>
      { /* contenue de la section  profile*/}
      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`group relative p-8 rounded-2xl border-2 ${feature.borderColor} hover:shadow-xl transition-all duration-500 cursor-pointer ${
                hoveredFeature === index ? 'scale-105 shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(0)}
            >
              <div className={`mb-6 ${feature.iconBg} p-3 rounded-xl inline-block`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Journey Steps */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl  md:text-5xl font-bold text-gray-900"
            >
              Faites briller votre <span className="text-orange-700/70">parcours</span>
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`group relative p-6 rounded-2xl bg-white border-2 border-gray-200 hover:shadow-xl transition-all duration-500 ${
                  animationStep === index % 4 ? 'ring-4 ring-orange-100 scale-90' : ''
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-10 h-10 rounded-full ${step.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentLanding;
