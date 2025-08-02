import React, { ReactNode, HTMLAttributes } from "react";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactNode[];
}

const Flex = ({ children, className = "", ...props }: FlexProps) => {
  return (
    <div className={`flex items-center w-full ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Flex;