import React, { PropsWithChildren } from "react";
import OverviewMenu from "./overview-menu";
import { cn } from "@/utils/cn";

interface Props extends PropsWithChildren {
  hasMenu?: boolean;
  fullWidth?: boolean;
  className?: string;
  containerClassName?: string;
}

const MainContainer = ({
  children,
  hasMenu = false,
  fullWidth = false,
  className,
  containerClassName,
}: Props) => {
  return (
    <section className={cn(className)}>
      <div className={cn("section-container flex gap-12 py-12", containerClassName)}>
        {!fullWidth && <div className="w-[258px]">{hasMenu && <OverviewMenu />}</div>}
        <div
          className={cn("flex-1", {
            "w-full": fullWidth,
          })}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default MainContainer;
