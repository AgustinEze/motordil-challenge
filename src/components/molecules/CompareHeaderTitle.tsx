import React from "react";
import FlexCol from "../atoms/FlexCol";
import Flex from "../atoms/Flex";
import { Switch } from "@radix-ui/react-switch";
import CompareTitle from "../atoms/CompareTitle";

const CompareHeaderTitle = () => {
  return (
    <FlexCol className="gap-6">
      <CompareTitle />
      <Flex className="h-[48px] items-start ">
        <span className="font-medium text-[20px] leading-[24px] hidden sm:inline">
          Compará tus anuncios guardados para analizar sus características.
        </span>
        <span className="font-normal text-[12px] leading-[18px] text-[#222222] sm:hidden inline">
          Seleccionalos directamente desde tu listado de anuncios guardados.
        </span>
      </Flex>
      <Flex className="gap-4 md:max-w-fit">
        <FlexCol className="gap-1 w-[396px]">
          <Flex className="h-[21px] items-start ">
            <span className="font-medium text-[14px] leading-[21px] text-[#0B1A32]">
              Ocultar similitudes
            </span>
          </Flex>
          <Flex className="h-[18x] items-start ">
            <span className="font-medium text-[12px] leading-[18px] text-[#5D636E]">
              Compará tus anuncios guardados para analizar sus características.
            </span>
          </Flex>
        </FlexCol>
        <Switch />
      </Flex>
    </FlexCol>
  );
};

export default CompareHeaderTitle;
