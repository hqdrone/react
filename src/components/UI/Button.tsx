import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const Button = ({ children, className = '', ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`h-[48px] min-w-[48px] cursor-pointer rounded-lg border-1 border-transparent bg-zinc-900 px-4 text-white hover:bg-zinc-800 disabled:bg-zinc-100 disabled:text-zinc-300 ${className}`}
    >
      {children}
    </button>
  );
};
