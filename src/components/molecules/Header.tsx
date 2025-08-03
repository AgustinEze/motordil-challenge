import React from "react";
import Flex from "../atoms/Flex";
import Logo from "../atoms/Logo";
import HeaderLink from "../atoms/HeaderLink";
import { ROUTES_HEADER_LINK } from "@/routes/routes";
import Notification from "../atoms/Notification";
import Menu from "./Menu";

const Header = () => {
  return (
      <Flex className="sm:px-5 h-[72px]  border-b-[1px] border-[#02040814] justify-center">
        <Flex className="px-4 sm:px-16 h-10 justify-between max-w-[1280px]">
          <Logo />
          <Flex className="gap-12 h-10 max-w-fit">
            <Flex className="gap-2 h-10 hidden lg:flex max-w-fit">
              {ROUTES_HEADER_LINK.map((el, index) => (
                <HeaderLink key={index} title={el.title} path={el.path} />
              ))}
            </Flex>
            <Flex className=" gap-4 h-10 justify-end max-w-[124px]">
              <Notification />
              <Menu />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
  );
};

export default Header;
