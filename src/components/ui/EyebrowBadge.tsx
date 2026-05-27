import React from "react";

interface EyebrowBadgeProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function EyebrowBadge({ children, className = "", id }: EyebrowBadgeProps) {
  return (
    <div
      id={id}
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-surface text-[10px] font-mono font-medium tracking-widest uppercase text-accent border border-accent/15 dark:border-accent/30 dark:text-accent shadow-sm select-none ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      <span>{children}</span>
    </div>
  );
}

export default EyebrowBadge;
