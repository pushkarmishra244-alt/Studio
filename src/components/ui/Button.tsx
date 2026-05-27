import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "minimal" | "dark";
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  showArrow?: boolean;
  arrowDirection?: "right" | "up-right";
  className?: string;
  id?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  showArrow = false,
  arrowDirection = "right",
  className = "",
  id,
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 rounded-full font-sans text-xs font-semibold tracking-wide uppercase transition-all duration-300 transform active:scale-[0.98] select-none cursor-pointer";

  const variants = {
    primary:
      "bg-zinc-950 text-white hover:bg-zinc-900 border border-zinc-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-50 dark:border-white py-3.5 px-6 shadow-md hover:shadow-lg",
    secondary:
      "card-surface-nested hover:shadow-md hover:-translate-y-0.5 border border-zinc-200/50 dark:border-zinc-800/40 text-foreground py-3.5 px-6",
    dark:
      "bg-zinc-900 text-white hover:bg-zinc-950 border border-zinc-800 py-3.5 px-6",
    minimal:
      "text-foreground hover:text-accent font-medium py-2 px-3 hover:opacity-85",
  };

  const currentVariantStyle = variants[variant];
  const fullClassName = `${baseStyle} ${currentVariantStyle} ${className}`;

  const renderArrow = () => {
    if (!showArrow) return null;
    return arrowDirection === "up-right" ? (
      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    ) : (
      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
    );
  };

  if (href) {
    const isAnchor = href.startsWith("#");
    const anchorProps = isAnchor
      ? {
          onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
            if (onClick) onClick(e);
            const target = document.querySelector(href);
            if (target) {
              e.preventDefault();
              target.scrollIntoView({ behavior: "smooth" });
            }
          },
        }
      : {};

    return (
      <a
        id={id}
        href={href}
        className={`${fullClassName} group`}
        {...anchorProps}
      >
        <span>{children}</span>
        {renderArrow()}
      </a>
    );
  }

  return (
    <button id={id} onClick={onClick} className={`${fullClassName} group`}>
      <span>{children}</span>
      {renderArrow()}
    </button>
  );
}
export default Button;
