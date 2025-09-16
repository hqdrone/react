import React from 'react';

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input className="h-[48px] rounded-lg border-1 border-zinc-200 bg-white px-4" {...props} />
  );
};
