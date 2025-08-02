import React from "react";
import Flex from "./Flex";
import { BanIcon, CheckCheckIcon } from "lucide-react";

const MechanicalWarrantyBadge = ({ yes }: { yes: boolean }) => {
  if (yes)
    return (
      <Flex className="gap-2">
        <CheckCheckIcon size={16} color='#15A87C'/>
        <span className="font-medium text-[10px] leading-[18px] text-[#808080]">Garantía mecánica </span>
      </Flex>
    );
  return (
    <Flex className="gap-2">
      <BanIcon   size={16} color="#EB3633" />

      <span className="font-medium text-[10px] leading-[18px] text-[#808080]">Sin garantía mecánica</span>
    </Flex>
  );
};

export default MechanicalWarrantyBadge;
