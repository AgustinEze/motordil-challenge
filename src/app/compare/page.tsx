import Flex from "@/components/atoms/Flex";
import FlexCol from "@/components/atoms/FlexCol";
import CompareHeaderTitle from "@/components/molecules/CompareHeaderTitle";
import { Switch } from "@/components/ui/switch";

import React from "react";

export default function Compare() {
  return (
    <FlexCol className="gap-6 ">
      <CompareHeaderTitle />
      <Flex className="gap-4 sm:max-w-fit">
        <FlexCol className="gap-1 w-[396px]">
          <Flex className="h-[21px] items-start ">
            <span className="font-medium text-[14px] leading-[21px] text-[#0B1A32]">
              Ocultar similitudes
            </span>
          </Flex>
          <Flex className="h-[18x] items-start hidden sm:flex">
            <span className="font-medium text-[12px] leading-[18px] text-[#5D636E]">
              Compará tus anuncios guardados para analizar sus características.
            </span>
          </Flex>
        </FlexCol>
        <Switch />
      </Flex>
      <Flex className="gap-8">
        <FlexCol className="gap-2">
          <h3 className="text-2xl font-bold">Compare</h3>
          <p className="text-gray-500">Choose two products to compare</p>
        </FlexCol>
        <FlexCol className="gap-2">
          <h3 className="text-2xl font-bold">Compare</h3>
          <p className="text-gray-500">Choose two products to compare</p>
        </FlexCol>
        <FlexCol className="gap-2">
          <h3 className="text-2xl font-bold">Compare</h3>
          <p className="text-gray-500">Choose two products to compare</p>
        </FlexCol>
      </Flex>
    </FlexCol>
  );
}
