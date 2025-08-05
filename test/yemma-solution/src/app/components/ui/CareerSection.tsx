// components/CareerSection.tsx
import React from 'react';
import FeatureCard from './FeatureCard';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const CareerSection = () => {
  const features: Feature[] = [
    {
      icon: '📝',
      title: 'Créez un profil unique',
      description: "Ajoutez vos compétences, expériences et dispo. Un profil clair et pro attire les recruteurs.",
    },
    {
      icon: '💡',
      title: 'Valorisez vos compétences',
      description: "Montrez ce que vous savez faire. Vos atouts sont visibles et compréhensibles immédiatement.",
    },
    {
      icon: '📣',
      title: 'Exprimez vos aspirations',
      description: "Un profil qui reflète votre parcours et vos objectifs. Soyez vu pour qui vous êtes.",
    },
    {
      icon: '👁️',
      title: 'Visibilité accrue aux recruteurs',
      description: "Votre profil est mis en avant auprès de recruteurs actifs, pour multiplier les opportunités.",
    },
    {
      icon: '🎯',
      title: 'Matching avec des offres ciblées',
      description: "Recevez des offres alignées avec votre profil. Plus besoin de postuler à tout va.",
    },
    {
      icon: '🤝',
      title: 'Accompagnement personnalisé',
      description: "Un coach dédié vous accompagne pour affiner votre profil et réussir vos entretiens.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Faites briller votre parcours.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CareerSection;
