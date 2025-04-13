'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@/utils/cn';
import { ChevronDownFullIcon } from '../icons';

function AccordionGroup({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('border-border-2 border-b last:border-b-0', className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'focus-visible:border-ring [&[data-state=closed]]:text-gray-2 [&[data-state=closed]]:font-500 [&[data-state=open]]:font-600 focus-visible:ring-ring/50 [&[data-state=open]]:bg-background-tertiary flex flex-1 items-center justify-between gap-4 px-4 py-3 text-left text-[15px] transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 md:py-4 lg:px-7 [&[data-state=open]>svg]:rotate-180',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownFullIcon className="text-gray-2 pointer-events-none shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div
        className={cn(
          'text-gray-2 py-5 pl-4 text-[15px] leading-[1.2] lg:pr-[22px] lg:pl-[35px]',
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

function Accordion({
  items,
}: {
  items: {
    title: string;
    description: string;
  }[];
}) {
  return (
    <AccordionGroup
      type="single"
      collapsible
      defaultChecked={true}
      defaultValue={items[0].title}
      className="tracking-normal"
    >
      {items.map((item, index) => (
        <AccordionItem value={item.title} key={index}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.description}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionGroup>
  );
}

export { Accordion };
