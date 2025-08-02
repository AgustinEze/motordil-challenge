import { BanIcon, CheckCheckIcon } from 'lucide-react';
import React from 'react'
import Flex from './Flex';

const TradeInBadge =  ({ yes }: { yes: boolean }) => {
  if (yes)
    return (
      <Flex className="gap-2">
        <CheckCheckIcon size={16} color='#15A87C'/>
        <span className="font-medium text-[10px] leading-[18px] text-[#808080]">Acepta permuta</span>
      </Flex>
    );
  return (
    <Flex className="gap-2">
      <BanIcon   size={16} color="#EB3633" />

      <span className="font-medium text-[10px] leading-[18px] text-[#808080]">No acepta permuta</span>
    </Flex>
  );
};

export default TradeInBadge