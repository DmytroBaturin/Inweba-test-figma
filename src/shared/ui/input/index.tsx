import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  containerClassName = "",
  className = "",
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-2 ${containerClassName}`}>
      {label && <label className="text-sm text-gray-700">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`h-16 p-3.5 border  text-black rounded-[4px] ${className}`}
        {...props}
      />
    </div>
  );
};
