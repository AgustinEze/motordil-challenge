import React from "react";
import Flex from "./Flex";
import { BanIcon, CheckCheckIcon } from "lucide-react";

const MechanicalWarranty = ({ yes }: { yes: boolean }) => {
  if (yes)
    return (
      <Flex className="gap-2">
        <CheckCheckIcon />
        <span className=" text-[#808080]">Garantía mecánica </span>
      </Flex>
    );
  return (
    <Flex className="gap-2">
      <BanIcon />

      <span className=" text-[#808080]">Sin garantía mecánica</span>
    </Flex>
  );
};

export default MechanicalWarranty;
