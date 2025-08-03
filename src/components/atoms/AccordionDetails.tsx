import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import FlexCol from "./FlexCol";

interface AccordionDetailsProps {
  title: string;
  headers: string[];
  contentMap: Record<string, string | number | boolean | undefined>;
}

const AccordionDetails = ({
  title,
  headers,
  contentMap,
}: AccordionDetailsProps) => {
  return (
    <Accordion type="single" collapsible className="max-w-[136px] sm:max-w-[352px]">
      <AccordionItem value="main-item">
        <AccordionTrigger className="px-4 py-2 sm:font-medium text-left text-[12px] leading-[19.2px] tracking-[0]">
          {title}
        </AccordionTrigger>
        <AccordionContent className="p-0 max-w-[136px] sm:max-w-[352px]">
          {headers?.map((header, index) => (
            <FlexCol
              key={header}
              className="px-4 py-2 text-sm"
              style={{
                backgroundColor: index % 2 === 0 ? "#F8F9FB" : "#FFFFFF",
              }}
            >
              <span className="font-medium text-[10px] leading-[18px] tracking-[0] sm:text-[12px] text-[#9095A0]">{header}</span>
              <span className="font-medium text-[12px] leading-[18px] tracking-[0] sm:text-[14px] text-[#31343A]">{contentMap[header]}</span>
            </FlexCol>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionDetails;
