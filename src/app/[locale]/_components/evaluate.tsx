import React from 'react';
import EvaluateCarousel from '@/components/feature/carousel/evaluate-carousel';
import type { Evaluate } from '@/types/course';
import Image from 'next/image';

const Evaluate = ({ locale }: { locale: string }) => {
  console.log('🚀 ~ Evaluate ~ locale:', locale);
  const evaluate = [
    {
      id: '1',
      author: {
        name: 'Herman Miller',
        position: 'Student',
        image: {
          src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
          alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
        },
      },
      comment: 'I love this course!',
      rating: 1,
    },
    {
      id: '2',
      author: {
        name: 'Herman Miller',
        position: 'Student',
        image: {
          src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
          alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
        },
      },
      comment: 'I love this course!',
      rating: 5,
    },
    {
      id: '3',
      author: {
        name: 'Herman Miller',
        position: 'Student',
        image: {
          src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
          alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
        },
      },
      comment: 'I love this course!',
      rating: 5,
    },
    {
      id: '4',
      author: {
        name: 'Herman Miller',
        position: 'Student',
        image: {
          src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
          alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
        },
      },
      comment: 'I love this course!',
      rating: 2,
    },
    {
      id: '5',
      author: {
        name: 'Herman Miller',
        position: 'Student',
        image: {
          src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
          alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
        },
      },
      comment: 'I love this course!',
      rating: 5,
    },
  ];

  return (
    <section className="lt-lg:py-18 relative bg-[#FF8D0A] py-10 sm:py-15">
      <Image
        src={'/images/home/evaluete-home.png'}
        width={732}
        height={239}
        alt="formation process background"
        className="absolute bottom-0 -left-10 hidden h-[125px] w-[380px] object-cover sm:block md:right-0 md:-bottom-7 md:h-[180px] md:w-[549px] lg:h-[239px] lg:w-[732px]"
      />
      <div className="section-container flex flex-col md:flex-row">
        <div>
          <h2 className="sm:text-32 text-24 gt-lg:text-[40px] gt-lg:leading-[72px] mb-2.5 text-center font-bold text-white sm:mb-4 md:text-left">
            Cảm nghĩ học viên
          </h2>
          <p className="mb-6 text-center text-base font-medium text-white sm:text-left">
            Xem một số học viên của chúng tôi nói gì về sự hỗ trợ tuyệt vời và
            dịch vụ xuất sắc mà chúng tôi cung cấp.
          </p>
        </div>
        <div className="max-w-[658px]">
          <EvaluateCarousel evaluate={evaluate} />
        </div>
      </div>
    </section>
  );
};

export default Evaluate;
