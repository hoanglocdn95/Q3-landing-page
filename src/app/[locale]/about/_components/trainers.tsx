import TrainerCard from '@/components/feature/cards/trainer-card';
import React from 'react';

const Trainers = () => {
  const trainers = [
    {
      name: 'John Doe',
      role: 'Trainer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/images/about/trainer-1.png',
    },
    {
      name: 'Jane Doe',
      role: 'Trainer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/images/about/trainer-2.png',
    },
  ];

  return (
    <section className="pt-16 pb-4">
      <div className="section-container">
        <h2 className="text-40 font-700 mb-6 text-center">Giảng viên</h2>
        <div className="flex gap-5">
          {trainers.map((trainer, index) => (
            <TrainerCard key={index} trainer={trainer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
