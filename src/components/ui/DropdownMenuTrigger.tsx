import React, { ReactNode } from 'react';

interface DropdownMenuTriggerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  children: ReactNode;
  onClick: () => void;
}

export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({
  asChild,
  children,
  onClick,
  ...props
}) => {
  if (asChild) {
    return (
      <div {...props} onClick={onClick}>
        {children}
      </div>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-black text-white dark:bg-white dark:text-black text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500 dark:focus:ring-gray-400"
      {...buttonProps}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
