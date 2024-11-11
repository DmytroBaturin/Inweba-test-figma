import { ReactNode } from "react";

interface BoxProps {
  children?: ReactNode;
  className?: string;
  tag?: "div" | "section" | "article";
}
export const Box = ({ children, tag = "div", className }: BoxProps) => {
  const Tag = tag;
  return <Tag className={className}>{children}</Tag>;
};
