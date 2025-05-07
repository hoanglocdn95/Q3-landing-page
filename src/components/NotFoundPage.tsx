'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

import { LogoLightIcon, ChevronRightIcon } from './icons';

export default function NotFoundPage() {
  useEffect(() => {
    const logos = document.querySelectorAll('.logo');
    const harrypotter = document.querySelectorAll('.harrypotter');
    const contentTop = document.querySelectorAll('.content-top');
    const contentBot = document.querySelectorAll('.content-bot');

    const applyAnimation = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver,
      className: string,
    ): void => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
          observer.unobserve(entry.target);
        }
      });
    };

    const logoObserver = new IntersectionObserver(
      (entries, observer) =>
        applyAnimation(entries, observer, 'animate-fadeLeftRight'),
      { threshold: 0.1 },
    );

    const harrypotterObserver = new IntersectionObserver(
      (entries, observer) =>
        applyAnimation(entries, observer, 'animate-moveAndZoom'),
      { threshold: 0.1 },
    );

    const contentTopObserver = new IntersectionObserver(
      (entries, observer) =>
        applyAnimation(entries, observer, 'animate-fadeBotTop'),
      { threshold: 0.1 },
    );

    const contentBotObserver = new IntersectionObserver(
      (entries, observer) =>
        applyAnimation(entries, observer, 'animate-fadeTopBot'),
      { threshold: 0.1 },
    );

    logos.forEach(el => logoObserver.observe(el));
    harrypotter.forEach(el => harrypotterObserver.observe(el));
    contentTop.forEach(el => contentTopObserver.observe(el));
    contentBot.forEach(el => contentBotObserver.observe(el));

    return () => {
      logos.forEach(el => logoObserver.unobserve(el));
      harrypotter.forEach(el => harrypotterObserver.unobserve(el));
      contentTop.forEach(el => contentTopObserver.unobserve(el));
      contentBot.forEach(el => contentBotObserver.unobserve(el));
    };
  }, []);

  return (
    <div className="relative mx-auto size-full">
      <Image
        src="/images/404.webp"
        className="absolute size-full object-cover"
        alt="Image of not found"
        fill
        priority
      />
      <div className="absolute size-full bg-gradient-to-b from-[#040709CC] to-[#040709]" />
      <div className="flex size-full">
        <div className="relative flex flex-1 flex-col items-center justify-center">
          <div className="logo absolute top-0 left-0 p-8 opacity-0 delay-500">
            <Link
              href="/vi/"
              className="text-h6 leading-h6 fill-white text-left font-bold"
            >
              <LogoLightIcon />
              <h1 className="sr-only">Trung tâm Anh ngữ Q3</h1>
            </Link>
          </div>
          <div className="content flex flex-col items-center">
            <div className="content-top mb-8 flex flex-col gap-4 opacity-0 delay-[1000ms] md:delay-[3500ms]">
              <p className="text-h3 leading-h3 text-center font-bold text-white sm:text-[120px] sm:leading-[145px]">
                Oops!
              </p>
              <p className="text-base leading-6 text-[#A1A2B4]">
                Trang bạn đang tìm không tồn tại hoặc đã bị xóa.
              </p>
            </div>

            <Link
              className="content-bot bg-secondary flex h-12 w-[225px] items-center justify-center gap-2 rounded-full fill-white text-white opacity-0 delay-[3500ms]"
              href="/vi/"
            >
              Trở về trang chủ
              <ChevronRightIcon />
            </Link>
          </div>
        </div>
        <div className="hidden flex-1 p-8 md:flex">
          <div className="harrypotter relative size-full overflow-hidden rounded-[32px] opacity-0 delay-[1000ms]">
            <div className="flex h-1/2 w-full" />
            <div className="relative flex h-1/2 w-full items-end">
              <div className="gradient-blur rounded-b-[32px]">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="z-10 w-full px-8 py-[60px]">
                <p className="border-b border-[#FFFFFF0F] pb-3 text-base leading-6 font-semibold text-white">
                  Harry Potter
                </p>
                <p className="mb-6 pt-3 text-base leading-6 text-white">
                  *Harry xuất hiện bất ngờ, chiếc áo choàng khẽ bay trong gió,
                  ánh mắt đầy cương quyết*
                </p>
                <p className="text-base leading-6 text-white">
                  Có vẻ như bạn đã đi lạc khỏi con đường của mình. Hãy để mình
                  đưa bạn quay lại nơi bạn thật sự thuộc về.
                </p>
              </div>
            </div>
            <Image
              src="/images/harrypotter.webp"
              className="absolute size-full object-cover object-left"
              alt="Image of Harry"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
