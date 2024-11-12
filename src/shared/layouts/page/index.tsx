import type { ReactNode } from "react";

import { cn } from "@/shared/lib/utils";

export const PageLayout = ({
  children,
  className,
  tag = "div",
}: {
  children: ReactNode;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={cn(
        "flex w-full flex-col h-full justify-center px-[10%] items-center",
        className,
      )}
    >
      <div className="h-full max-w-[1366px] w-full justify-center flex flex-col">
        {children}
      </div>
    </Tag>
  );
};
