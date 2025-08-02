import React, { ReactNode, HTMLAttributes } from "react";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactNode[];
}
const FlexCol = ({ children, className = "", ...props }: FlexProps) => {
  return (
    <div className={`flex flex-col w-full ${className}`} {...props}>
      {children}
    </div>
  );
};

export default FlexCol;
