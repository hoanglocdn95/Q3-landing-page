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
        'bg-secondary font-space-grotesk min-h-p[610px] relative flex w-full overflow-hidden rounded-2xl p-4 md:min-h-[396px] lg:min-h-[408px] lg:p-6',
        className,
      )}
    >
      <div className="flex h-fit flex-col gap-3 md:gap-6 lg:flex-row">
        <div className="rounded-12 relative aspect-[311/360] h-fit w-full overflow-hidden max-md:max-w-[360px] md:aspect-[194/280] md:w-[194px] lg:aspect-[250/360] lg:w-[250px]">
          <Image src={imageUrl} alt={name} fill className="object-cover" />
        </div>
        <div className="flex-1 text-white lg:pt-3">
          <h3 className="text-28 font-700">{name}</h3>
          <p className="text-16 font-500">{role}</p>
          <p className="text-14 mt-2 leading-[1.2] md:mt-3">
            {description[locale]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
