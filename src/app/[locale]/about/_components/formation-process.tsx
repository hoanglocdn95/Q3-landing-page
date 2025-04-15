import { ChevronDownIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const FormationProcess = () => {
  return (
    <section className="relative pt-10 pb-[138px] md:py-15 lg:py-16">
      <div className="section-container flex flex-col justify-between gap-4 md:flex-row md:gap-10 lg:gap-[105px]">
        <div className="relative order-2 aspect-[503/600] w-full md:order-1 md:w-[41%] md:max-w-[503px]">
          <Image
            src="/images/about/formation-process.png"
            alt="formation-process"
            fill
            className="rounded-12 object-cover"
          />
          <div className="absolute top-[275px] left-[106px] z-0 hidden size-[400px] rotate-[13deg] bg-[radial-gradient(50%_50%_at_50%_50%,_#067E81_0%,_rgba(217,_217,_217,_0)_100%)] opacity-[0.3] md:block lg:right-0 lg:bottom-[10%] xl:size-[700px]" />
        </div>
        <div className="order-1 flex-1 md:order-2">
          <h2 className="text-24 md:text-32 font-700 lg:text-40 leading-7 md:leading-12 lg:leading-14">
            Quá trình hình thành và phát triển
          </h2>
          <p className="font-500 text-text-secondary text-14 lg:text-16 my-3 md:my-2 lg:my-4">
            Q3 Language được thành lập vào năm 2024 tại thành phố Adelaide, Úc,
            với mục tiêu trở thành đơn vị tiên phong trong lĩnh vực đào tạo và
            luyện thi chứng chỉ PTE (Pearson Test of English).
          </p>
          <p className="font-500 text-text-secondary text-14 lg:text-16 mb-6">
            Khởi đầu từ những lớp học nhỏ, chúng tôi tập trung vào việc xây dựng
            chương trình học tinh gọn và hiệu quả, phù hợp với từng cấp độ học
            viên. Với sự dẫn dắt của đội ngũ chuyên gia có bề dày kinh nghiệm và
            tâm huyết, Q3s Language không ngừng hoàn thiện các phương pháp giảng
            dạy, tích hợp công nghệ mô phỏng bài thi thực tế để học viên làm
            quen và tự tin khi bước vào kỳ thi PTE chính thức.
          </p>
          <Button className="w-[137px] md:w-[142px] lg:w-[142px]">
            Xem thêm <ChevronDownIcon />
          </Button>
        </div>
      </div>
      <Image
        src={'/images/about/formation-process-background.png'}
        width={732}
        height={239}
        alt="formation process background"
        className="absolute -right-12 bottom-0 h-[125px] w-[380px] object-cover md:right-0 md:-bottom-7 md:h-[180px] md:w-[549px] lg:h-[239px] lg:w-[732px]"
      />
    </section>
  );
};

export default FormationProcess;
