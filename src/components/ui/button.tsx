"use client";

import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  className = "",
  external = false,
  onClick,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500";

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${className}`}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
}
