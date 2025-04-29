import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className = "",
  ...props
}) => {
  const baseClass =
    "inline-flex items-center justify-center rounded-2xl border border-transparent bg-black px-4 py-2 text-white font-medium transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 disabled:opacity-50 ";

  return (
    <button className={`${baseClass} ${className}`} {...props}>
    </button>
  );
};
