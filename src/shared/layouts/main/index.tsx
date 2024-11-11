"use server";
import type { ReactNode } from "react";

interface MainLayoutProps {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}

export const MainLayout = async ({
  children,
  header,
  footer
}: MainLayoutProps) => {
  return (
    <div className='flex flex-col min-h-screen'>
      {header}
      <div className='flex-grow h-full mt-[96px]'>{children}</div>
      {footer}
    </div>
  );
};
