import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "icon";
}

export const Button = ({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const defaultClass = "text-white transition duration-150 rounded-[14px]";
  const variantClass = {
    primary: "bg-[#003366] text-white hover:bg-[#014991]",
    secondary: "bg-white",
    icon: "bg-transparent text-gray-500 hover:text-gray-700 p-2",
  };

  return (
    <button
      {...props}
      className={clsx(defaultClass, variantClass[variant], className)}
    >
      {children}
    </button>
  );
};
