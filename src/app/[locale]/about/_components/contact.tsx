import ContactFormSection from '@/components/contact-form-section';
import React from 'react';

const Contact = ({ locale }: { locale: string }) => {
  return (
    <div className="relative">
      <ContactFormSection locale={locale} className="relative z-10" />
      <div className="absolute top-[415px] left-[-56px] z-0 h-[500px] w-[500px] rotate-[13deg] bg-[radial-gradient(50%_50%_at_50%_50%,_#B5E2FA_0%,_rgba(217,_217,_217,_0)_100%)] opacity-[0.6]" />
    </div>
  );
};

export default Contact;
