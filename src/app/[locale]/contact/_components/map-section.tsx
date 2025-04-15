import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import viTranslations from '@/locales/vi/contact.json';
import enTranslations from '@/locales/en/contact.json';
import { ELocale } from '@/constants/enum';

interface IMapSectionProps {
  locale: ELocale;
}

const MapSection: React.FC<IMapSectionProps> = ({ locale }) => {
  const t = locale === ELocale.EN ? enTranslations : viTranslations;

  return (
    <section className="bg-secondary py-6 sm:py-12">
      <div className="section-container">
        <div className="overflow-hidden rounded-lg bg-white">
          <div className="relative h-[450px] w-full sm:h-[600px]">
            <Image
              src="/images/contact/map.webp"
              alt={t.map.map_image_alt}
              fill
              className="hidden object-cover sm:block"
            />

            <div className="top-4 left-4 h-full max-h-[450px] rounded-lg bg-white p-4 shadow-md sm:absolute sm:max-h-[568px] sm:max-w-sm">
              <h2 className="text-secondary-foreground mb-6 text-2xl font-bold">
                {t.map.title}
              </h2>

              <div className="flex max-h-[calc(450px-64px-16px)] flex-col gap-6 overflow-y-auto sm:max-h-[calc(568px-72px-16px)]">
                {t.map.locations.map((location, index) => (
                  <div key={index} className="flex">
                    <MapPin className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">{location.city}</h3>
                      <p className="text-text-secondary text-sm">
                        {location.name}
                      </p>
                      <p className="text-text-secondary text-sm">
                        {location.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
