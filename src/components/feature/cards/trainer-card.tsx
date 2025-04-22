import React from 'react';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import { ITrainer } from '@/types/trainer';
import { ELocale } from '@/constants/enum';

interface ITrainerCardProps {
  trainer: ITrainer;
  className?: string;
  locale: ELocale;
}

const TrainerCard: React.FC<ITrainerCardProps> = ({
  trainer,
  className,
  locale,
}) => {
  const { name, role, description, imageUrl } = trainer;

  return (
    <div
      className={cn(
        'bg-secondary font-space-grotesk min-h-p[610px] relative flex w-full cursor-pointer overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl md:min-h-[396px] lg:min-h-[408px] lg:p-6',
        className,
      )}
    >
      <div className="flex h-fit flex-col gap-3 md:flex-row md:gap-6">
        <div className="rounded-12 relative aspect-[311/360] h-fit w-full overflow-hidden transition-transform duration-300 group-hover:scale-105 max-md:max-w-[360px] md:aspect-[194/280] md:w-[194px] lg:aspect-[250/360] lg:w-[250px]">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
            priority
          />
        </div>
        <div className="flex-1 text-white md:pt-6 lg:pt-3">
          <h3 className="text-24 lg:text-28 font-700 hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <p className="text-16 font-500">{role}</p>
          <p className="text-14 font-400 mt-2 leading-[1.2] md:mt-3">
            {description[locale]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
