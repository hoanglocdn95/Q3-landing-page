import { BookIcon, EditIcon, FileCheckIcon, GraduationIcon } from "@/components/icons";
import { cn } from "@/utils/cn";
import React from "react";
import MainContainer from "./main-container";

interface Stage {
  id: string;
  title: string;
  description: string[];
  className?: string;
}

interface StageProps extends Stage {
  index: number;
}

interface LearningStagesProps {
  data: Stage[];
}

const Stage = ({ title, description, className, index }: StageProps) => {
  const generateIcon = () => {
    switch (index) {
      case 1:
        return <EditIcon />;
      case 2:
        return <FileCheckIcon />;
      case 3:
        return <BookIcon />;
      case 4:
        return <GraduationIcon />;
      default:
        return null;
    }
  };

  return (
    <article
      className={cn(
        "flex gap-4 px-4 py-5",
        index % 2 === 0 ? "bg-background-tertiary" : "bg-white",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center w-16 h-16 rounded-12 flex-shrink-0",
          index % 2 === 0 ? "bg-white" : "bg-background-tertiary"
        )}
      >
        {generateIcon()}
      </div>
      <div>
        <h3 className="text-lg font-700">{title}</h3>
        <ul className="space-y-1 list-disc">
          {description.map((item, index) => (
            <li key={index} className="flex items-start font-500 text-12">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const LearningStages = ({ data }: LearningStagesProps) => {
  return (
    <MainContainer className="bg-secondary relative">
      <h2 className="text-32 font-semibold mb-4 text-white">Lộ trình khóa học</h2>
      <div className="bg-white rounded-12 overflow-hidden">
        {data.map((item, index) => (
          <Stage key={item.id} {...item} index={index + 1} />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full  max-w-[864px] h-full max-h-[340px] bg-[url('/images/background2.png')] bg-cover bg-center bg-no-repeat"></div>
    </MainContainer>
  );
};

export default LearningStages;
