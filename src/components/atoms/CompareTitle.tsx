import React from "react";
import Flex from "./Flex";

const CompareTitle = () => {
  return (
    <Flex className="h-8 sm:h-[88px] items-end ">
      <span className=" font-medium text-[32px] leading-[32px] tracking-[0.01em] text-[#31343A] hidden sm:inline">
        Compará tus anuncios guardados
      </span>
      <span className=" font-medium text-[24px] leading-[32px] tracking-[0.01em] text-[#31343A] inline sm:hidden">
        Compará
      </span>
    </Flex>
  );
};

export default CompareTitle;
