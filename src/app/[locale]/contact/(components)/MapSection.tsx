import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import viTranslations from "@/locales/vi/contact/map.json";
import enTranslations from "@/locales/en/contact/map.json";

interface MapSectionProps {
  locale: string;
}

const MapSection: React.FC<MapSectionProps> = ({ locale }) => {
  const t = locale === "en" ? enTranslations : viTranslations;

  return (
    <section className="bg-secondary sm:py-12 py-6">
      <div className="section-container">
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="relative sm:h-[600px] h-[450px] w-full">
            <Image
              src="/images/map.webp"
              alt={t.mapImageAlt}
              fill
              className="object-cover sm:block hidden"
            />

            <div className="sm:absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md sm:max-w-sm sm:max-h-[568px] max-h-[450px] h-full">
              <h2 className="text-2xl font-bold text-secondary-foreground mb-6">
                {t.title}
              </h2>

              <div className="flex flex-col gap-6 overflow-y-auto sm:max-h-[calc(568px-72px-16px)] max-h-[calc(450px-64px-16px)]">
                {t.locations.map((location, index) => (
                  <div key={index} className="flex">
                    <MapPin className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">{location.city}</h3>
                      <p className="text-sm text-text-secondary">
                        {location.name}
                      </p>
                      <p className="text-sm text-text-secondary">
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