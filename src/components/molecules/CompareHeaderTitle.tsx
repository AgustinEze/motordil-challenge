import React from "react";
import FlexCol from "../atoms/FlexCol";
import CompareTitle from "../atoms/CompareTitle";
import CompareDescription from "../atoms/CompareDescription";

const CompareHeaderTitle = () => {
  return (
    <FlexCol className="gap-2 sm:gap-6">
      <CompareTitle />
      <CompareDescription />
      
    </FlexCol>
  );
};

export default CompareHeaderTitle;
