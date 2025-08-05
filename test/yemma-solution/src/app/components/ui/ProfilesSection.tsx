import React from 'react';
import FeatureCard from './FeatureCard';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const ProfilesSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '⚡',
      title: 'Accès rapide à des profils pré-qualifiés',
      description: "Gagnez du temps et recrutez efficacement grâce à notre vivier de talents déjà évalués. Moins de tri, plus d'action.",
    },
    {
      icon: '🌍',
      title: 'Chasse de profils rares et internationaux',
      description: "Nous identifions des talents rares, en local ou à l’international. Notre expertise en sourcing vous apporte les profils introuvables sur le marché.",
    },
    {
      icon: '🧠',
      title: 'Plateforme intuitive de tri et de matching',
      description: "Naviguez facilement grâce à une interface intelligente. Le matching automatique vous propose les meilleurs profils en quelques clics.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Des profils adaptés à vos enjeux.
      </h2>
      <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
        Chaque entreprise est unique, chaque recrutement aussi. Nous vous proposons des talents alignés avec vos objectifs et votre culture. Parce qu’un bon profil, c’est celui qui répond à vos vrais défis.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {features.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ProfilesSection;