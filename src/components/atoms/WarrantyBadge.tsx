import React from "react";
import Flex from "./Flex";
import { BanIcon, CheckCheckIcon } from "lucide-react";

const WarrantyBadge = ({ yes }: { yes: boolean }) => {
  if (yes)
    return (
      <Flex className="gap-2">
        <CheckCheckIcon />
        <span className=" text-[#808080]">Garantía de fábrica</span>
      </Flex>
    );
  return (
    <Flex className="gap-2">
      <BanIcon />

      <span className=" text-[#808080]">Sin garantía de fábrica</span>
    </Flex>
  );
};

export default WarrantyBadge;
