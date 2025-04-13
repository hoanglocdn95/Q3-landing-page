import { ChevronDownIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const FormationProcess = () => {
  return (
    <section className="relative py-16">
      <div className="section-container flex justify-between gap-[105px]">
        <div className="relative aspect-[503/600] w-[41%] max-w-[503px]">
          <Image
            src="/images/about/formation-process.png"
            alt="formation-process"
            fill
            className="rounded-12 object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-40 font-700">
            Quá trình hình thành và phát triển
          </h2>
          <p className="font-500 text-text-secondary my-4">
            Q3 Language được thành lập vào năm 2024 tại thành phố Adelaide, Úc,
            với mục tiêu trở thành đơn vị tiên phong trong lĩnh vực đào tạo và
            luyện thi chứng chỉ PTE (Pearson Test of English).
          </p>
          <p className="font-500 text-text-secondary mb-6">
            Khởi đầu từ những lớp học nhỏ, chúng tôi tập trung vào việc xây dựng
            chương trình học tinh gọn và hiệu quả, phù hợp với từng cấp độ học
            viên. Với sự dẫn dắt của đội ngũ chuyên gia có bề dày kinh nghiệm và
            tâm huyết, Q3s Language không ngừng hoàn thiện các phương pháp giảng
            dạy, tích hợp công nghệ mô phỏng bài thi thực tế để học viên làm
            quen và tự tin khi bước vào kỳ thi PTE chính thức.
          </p>
          <Button className="w-[142px]">
            Xem thêm <ChevronDownIcon />
          </Button>
        </div>
      </div>
      <Image
        src={'/images/about/formation-process-background.png'}
        width={732}
        height={239}
        alt="formation process background"
        className="absolute right-0 -bottom-7 h-[239px] w-[732px] object-cover"
      />
      <div className="absolute top-[408px] left-[406px] z-0 h-[500px] w-[500px] rotate-[13deg] bg-[radial-gradient(50%_50%_at_50%_50%,_#067E81_0%,_rgba(217,_217,_217,_0)_100%)] opacity-[0.3]" />
    </section>
  );
};

export default FormationProcess;
