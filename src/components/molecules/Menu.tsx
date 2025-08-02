import React from "react";
import Flex from "../atoms/Flex";
import { MenuIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Menu = () => {
  return (
    <Flex className="gap-3 px-3 py-2 border-[1px] border-[#E6E6E6] rounded-3xl h-10 max-w-[84px] min-w-[84px]">
      <MenuIcon className="h-6 w-6 text-[#5D636E]" />
      <Avatar className="w-6 h-6 items-center justify-center">
        <AvatarImage src="/profile.svg" />
        <AvatarFallback>User</AvatarFallback>
      </Avatar>
    </Flex>
  );
};

export default Menu;
