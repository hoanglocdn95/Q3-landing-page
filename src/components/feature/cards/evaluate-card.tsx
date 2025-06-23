import { StarIcon } from '@/components/icons';
import { IEvaluate } from '@/types/course';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import React from 'react';
import { ELocale } from '@/constants/enum';

interface IProps {
  evaluate: IEvaluate;
  className?: string;
  locale: ELocale;
}

const EvaluateCard = ({ evaluate, className, locale = ELocale.VI }: IProps) => {
  return (
    <div className={cn('bg-text-gray-white rounded-12 w-full', className)}>
      <div className="flex flex-col max-md:p-4 md:flex-row md:items-center">
        <div className="relative overflow-hidden">
          <Image
            src={evaluate.author.image.src}
            alt={evaluate.author.image.src || evaluate.author.name}
            width={256}
            height={348}
            priority
            className="rounded-12 h-[148px] w-[137px] object-cover md:h-[296px] md:w-[260px] lg:h-[348px] lg:w-[265px]"
          />
        </div>

        <div className="min-w-1/2 flex-1 pt-4 md:p-6">
          <div className="mb-2 flex gap-1 md:mb-3">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                className={`h-5 w-5 ${
                  index + 1 <= evaluate.rating
                    ? 'text-secondary-hover'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="mb-4 line-clamp-8 max-h-[192px] md:mb-6 lg:mb-7">
            <p className="text-text-secondary text-14 font-500 md:text-16">
              {evaluate[locale].comment}
            </p>
          </div>
          <div>
            <h4 className="font-700 text-14 md:text-17">
              {evaluate.author.name}
            </h4>
            <p className="text-text-secondary text-14 md:text-16">
              {evaluate[locale].position}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluateCard;
