import TrainerCard from '@/components/feature/cards/trainer-card';
import React from 'react';

const Trainers = () => {
  const trainers = [
    {
      name: 'Hùng Mạnh Dương',
      role: 'Founder & Head Trainer',
      description:
        'Tiến sĩ Hùng Dương, nhà sáng lập và CEO của Q3 Language, có nhiều kinh nghiệm trong giảng dạy PTE. Với phương pháp giảng dạy cá nhân hóa, anh đã hỗ trợ nhiều học viên đạt được mục tiêu PTE. Sự dẫn dắt của anh hướng Q3s Language đến việc xây dựng một nền tảng linh hoạt và chuyên sâu dành cho việc chuẩn bị kỳ thi PTE.',
      imageUrl: '/images/about/trainer-1.png',
    },
    {
      name: 'Phương Dương',
      role: 'PTE Trainer',
      description:
        'Cô Phương Dương, giảng viên tại Q3 Language, chuyên sâu về phát âm, giao tiếp và luyện thi PTE. Với hơn 2 năm kinh nghiệm giảng dạy, cô đã giúp nhiều học viên đạt được mục tiêu học tập của mình. Phương pháp giảng dạy sáng tạo của cô mang đến môi trường học tập đầy động lực và hỗ trợ. Cô tốt nghiệp Thạc sĩ Ngôn ngữ học Ứng dụng Tiếng Anh tại Trường Đại học Ngoại ngữ, Đại học Quốc gia Hà Nội, Việt Nam.',
      imageUrl: '/images/about/trainer-2.png',
    },
  ];

  return (
    <section className="relative z-10 pt-[30px] md:pt-15 lg:pt-16 lg:pb-4">
      <div className="section-container">
        <h2 className="text-24 md:text-32 font-700 lg:text-40 mb-6 text-center">
          Đội ngũ giáo viên
        </h2>
        <div className="flex flex-col gap-5 md:flex-row md:gap-4 lg:gap-5">
          {trainers.map((trainer, index) => (
            <TrainerCard key={index} trainer={trainer} className="flex-1" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
