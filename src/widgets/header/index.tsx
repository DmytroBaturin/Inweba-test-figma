"use client";
import { useState } from "react";
import { PageLayout } from "@/shared/layouts/page";
import Image from "next/image";

import logo from "@/shared/assets/logo/logo.svg";
import { Button } from "@/shared/ui/button";

import up from "@/shared/assets/lineheader.svg";
import { cn } from "@/shared/lib/utils";

const navItems = ["Home", "Courses", "About", "Contact us"];
const coursesItems = ["Course 1", "Course 2", "Course 3"];

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header>
      <PageLayout>
        <div className="w-full py-[16px] flex justify-between items-center">
          <Image src={logo} alt={"logo"} />
          <div className="flex gap-14 justify-between items-center">
            <nav className="list-none font-medium font-roboto md:flex hidden items-center gap-6">
              {navItems.map((item) => (
                <li
                  key={item}
                  className="text-[16px] flex gap-1 cursor-pointer py-[12px] px-[18px] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#003366] after:w-0 after:transition-all hover:after:w-full"
                  onClick={() =>
                    item === "Courses" && setIsDropdownOpen(!isDropdownOpen)
                  }
                >
                  {item}
                  {item === "Courses" && (
                    <Image
                      className={cn(
                        isDropdownOpen && "rotate-180",
                        "transition-transform duration-200",
                      )}
                      src={up}
                      alt={"stroke"}
                    />
                  )}
                  {item === "Courses" && isDropdownOpen && (
                    <ul className="absolute rounded-[14px] top-full left-0 mt-2 bg-white shadow-md list-none p-2">
                      {coursesItems.map((course) => (
                        <li
                          key={course}
                          className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                        >
                          {course}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </nav>

            <Button
              className="font-roboto py-[14px] px-[30px]"
              variant="primary"
            >
              Login
            </Button>
          </div>
        </div>
      </PageLayout>
    </header>
  );
};
