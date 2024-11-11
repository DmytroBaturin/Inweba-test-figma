"use client";
import { useState } from "react";
import { Box } from "@/shared/ui/box";
import { Button } from "@/shared/ui/button";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenIndex?: number;
}

export const Accordion = ({ items, defaultOpenIndex = 0 }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(defaultOpenIndex);

  const toggleAccordion = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  return (
    <div className="w-full justify-between gap-1 h-full flex flex-col">
      {items.map((item, index) => (
        <Box
          key={index}
          className="border-[1px]  border-[#003366] rounded-[16px] overflow-hidden py-[30px] px-[40px]"
        >
          <span
            onClick={() => toggleAccordion(index)}
            className="flex text-[20px] font-medium font-roboto justify-between items-center w-full bg-white text-left  text-gray-700"
          >
            {item.title}
            <Button
              className="min-w-[40px] font-normal font-poppins justify-center rounded-full min-h-[40px] items-center px-0 py-0"
              variant="primary"
            >
              {activeIndex === index ? "-" : "+"}
            </Button>
          </span>
          {activeIndex === index && (
            <p className="mt-[30px] custom-scrollbar text-[18px] font-roboto pt-[30px] h-[80px] max-w-[615px] mr-[60px] text-[#343434] border-t overflow-y-auto custom-scrollbar">
              {item.content}
            </p>
          )}
        </Box>
      ))}
    </div>
  );
};
