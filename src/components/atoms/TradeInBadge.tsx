import { BanIcon, CheckCheckIcon } from 'lucide-react';
import React from 'react'
import Flex from './Flex';

const TradeInBadge =  ({ yes }: { yes: boolean }) => {
  if (yes)
    return (
      <Flex className="gap-2">
        <CheckCheckIcon />
        <span className=" text-[#808080]">Acepta permuta</span>
      </Flex>
    );
  return (
    <Flex className="gap-2">
      <BanIcon />

      <span className=" text-[#808080]">No acepta permuta</span>
    </Flex>
  );
};

export default TradeInBadge