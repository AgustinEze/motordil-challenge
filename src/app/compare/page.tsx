import FlexCol from "@/components/atoms/FlexCol";
import CompareHeaderTitle from "@/components/molecules/CompareHeaderTitle";
import CompareSection from "@/components/molecules/CompareSection";
import CompareToggle from "@/components/molecules/CompareToggle";

import React from "react";

export default function Compare() {
  return (
    <FlexCol className="gap-6 ">
      <CompareHeaderTitle />
      <CompareToggle />
      <CompareSection />
    </FlexCol>
  );
}
