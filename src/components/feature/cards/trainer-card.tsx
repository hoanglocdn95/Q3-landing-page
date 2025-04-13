import React from 'react';
import Image from 'next/image';
import { cn } from '@/utils/cn';

interface ITrainer {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

interface TrainerCardProps {
  trainer: ITrainer;
  className?: string;
}

const TrainerCard: React.FC<TrainerCardProps> = ({ trainer, className }) => {
  const { name, role, description, imageUrl } = trainer;

  return (
    <div
      className={cn(
        'bg-secondary relative flex w-full overflow-hidden rounded-2xl p-6',
        className,
      )}
    >
      <div className="flex gap-6">
        <div className="rounded-12 overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            width={250}
            height={260}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 pt-3 text-white">
          <h3 className="text-28 font-700">{name}</h3>
          <p className="text-24 font-500 mt-1">{role}</p>
          <p className="text-14 mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
