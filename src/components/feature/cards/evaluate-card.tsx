import { StarIcon } from "@/components/icons";
import { Evaluate } from "@/types/course";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

interface Props {
  evaluate: Evaluate;
  className?: string;
}

const EvaluateCard = ({ evaluate, className = "" }: Props) => {
  return (
    <div className={cn("bg-text-gray-white rounded-12 w-full", className)}>
      <div className="flex flex-col md:flex-row items-center">
        <div className="relative flex-shrink-0 rounded-12 overflow-hidden w-[265px] h-[348px]">
          <Image
            src={evaluate.author.image.src}
            alt={evaluate.author.image.src || evaluate.author.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 p-6 ">
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                className={`w-5 h-5 ${
                  index + 1 <= evaluate.rating ? "text-secondary-hover" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <p className="text-text-secondary mb-10 font-500">{evaluate.comment}</p>

          <div>
            <h4 className="font-700 text-[17px]">{evaluate.author.name}</h4>
            <p className="text-text-secondary text-14">{evaluate.author.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluateCard;
