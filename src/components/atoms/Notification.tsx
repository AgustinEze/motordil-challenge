import React from "react";
import Flex from "./Flex";
import { Bell } from "lucide-react";
import Link from "next/link";
import { ROUTER } from "@/routes/routes";

const Notification = () => {
  return (
    <Flex className="max-w-6 h-6 hidden sm:flex">
      <Link href={ROUTER.notifications}>
        <Bell color='#5D636E'/>
      </Link>
    </Flex>
  );
};

export default Notification;
