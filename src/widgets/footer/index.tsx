import * as React from "react";
import { PageLayout } from "@/shared/layouts/page";
import Image from "next/image";
import logo from "@/shared/assets/logo/Logo.svg";
import { Button } from "@/shared/ui/button";

const navItems = ["Course", "About", "Contact"];

export const Footer = () => {
  return (
    <footer className="py-[20px] flex justify-center items-center w-full ">
      <PageLayout>
        <div className="w-full flex justify-between items-center">
          <div className="w-full">
            <Image src={logo} alt={"logo"} />
          </div>
          <p className="regular-text-color font-roboto w-full">
            © 2024 Dickens Consulting Group, LLC
          </p>
          <nav className="list-none font-medium font-roboto md:flex hidden items-center gap-3">
            {navItems.map((item) => (
              <li
                key={item}
                className="text-[16px] cursor-pointer py-[12px] px-[18px] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#003366] after:w-0 after:transition-all hover:after:w-full"
              >
                {item}
              </li>
            ))}
          </nav>
        </div>
      </PageLayout>
    </footer>
  );
};
