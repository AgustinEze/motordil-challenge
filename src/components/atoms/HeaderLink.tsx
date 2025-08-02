import React from "react";
import Flex from "./Flex";
import Link from "next/link";

interface HeaderLinkProps {
  title: string;
  path: string;
}

const HeaderLink = ({ title, path }: HeaderLinkProps) => {
  return (
    <Flex className="p-3 round">
      <Link href={path}>
        <span className="font-medium text-[#5D636E] text-sm whitespace-nowrap
">{title}</span>
      </Link>
    </Flex>
  );
};

export default HeaderLink;
