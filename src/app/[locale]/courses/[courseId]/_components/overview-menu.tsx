import { ChevronRightIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import React from "react";

const OverviewMenu = () => {
  const menuItems = [
    {
      title: "Bạn nên tham gia khóa học này nếu bạn:",
      id: "1",
    },
    {
      title: "Thời gian học tập linh hoạt",
      id: "2",
    },
    {
      title: "Lộ trình khóa học",
      id: "3",
    },
    {
      title: "Đặc Điểm Nổi Bật Của Khóa 1 Kèm 1",
      id: "4",
    },
    {
      title: "Cảm nghĩ học viên",
      id: "5",
    },
    {
      title: "Câu Hỏi Thường Gặp",
      id: "6",
    },
  ];
  return (
    <nav className="bg-background-secondary rounded-8 overflow-hidden text-16">
      <h3 className="font-600 px-6 bg-primary py-[22px] text-white">Tổng quan</h3>
      <ul className="mt-2.5 px-6 space-y-5 divide-y divide-gray-300">
        {menuItems.map((item) => (
          <li key={item.id} className=" text-dark font-500 pb-5">
            {item.title}
          </li>
        ))}
      </ul>
      <div className="p-4">
        <Button>
          Đăng ký ngay <ChevronRightIcon />
        </Button>
      </div>
    </nav>
  );
};

export default OverviewMenu;
