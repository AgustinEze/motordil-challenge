import React from 'react'
import Flex from './Flex';
import { BanIcon, CheckCheckIcon } from 'lucide-react';

const FinancingBadge = ({ yes }: { yes: boolean }) => {
  if (yes)
    return (
      <Flex className="gap-2">
        <CheckCheckIcon />
        <span className=" text-[#808080]">Acepta Financiación</span>
      </Flex>
    );
  return (
    <Flex className="gap-2">
      <BanIcon />

      <span className=" text-[#808080]">No acepta financiación</span>
    </Flex>
  );
};

export default FinancingBadge