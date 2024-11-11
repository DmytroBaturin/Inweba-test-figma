import type { ReactNode } from "react";

import { cn } from "@/shared/lib/utils";

export const PageLayout = ({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col h-full justify-center px-[200px] items-center",
        className
      )}
    >
      <div className='h-full max-w-[1366px] w-full justify-center flex flex-col'>
        {children}
      </div>
    </div>
  );
};
