import React, { PropsWithChildren } from 'react';
import OverviewMenu from './overview-menu';
import { cn } from '@/utils/cn';

interface Props extends PropsWithChildren {
  id?: string;
  hasMenu?: boolean;
  fullWidth?: boolean;
  className?: string;
  containerClassName?: string;
}

const MainContainer = ({
  id,
  children,
  hasMenu = false,
  fullWidth = false,
  className,
  containerClassName,
}: Props) => {
  return (
    <section className={cn(className)} id={id}>
      <div
        className={cn(
          'section-container relative flex gap-[54px] py-10 lg:gap-[66px] lg:py-12',
          containerClassName,
        )}
      >
        {!fullWidth && (
          <div className="hidden flex-shrink-0 md:block md:w-[225px] lg:w-[258px]">
            {hasMenu && <OverviewMenu className="sticky top-0" />}
          </div>
        )}
        <div
          className={cn('flex-1', {
            'w-full': fullWidth,
          })}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default MainContainer;
