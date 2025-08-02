import Flex from "@/components/atoms/Flex";
import FlexCol from "@/components/atoms/FlexCol";
import CompareHeaderTitle from "@/components/molecules/CompareHeaderTitle";

import React from "react";

export default function Compare() {
  return (
    <FlexCol className="gap-6 ">
      <CompareHeaderTitle />
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
