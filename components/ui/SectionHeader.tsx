import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  action?: { label: string; href: string };
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({ eyebrow, title, action, align = "left", className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-end justify-between gap-4",
        align === "center" && "flex-col items-center text-center",
        className
      )}
    >
      <div className={cn(align === "center" && "flex flex-col items-center")}>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 text-cw-h2 font-display font-semibold leading-[var(--cw-lh-snug)] tracking-[var(--cw-tracking-tight)] text-cw-text">
          {title}
        </h2>
      </div>

      {action && (
        <Link
          href={action.href}
          className="inline-flex min-h-11 items-center text-sm font-medium text-cw-accent transition-colors hover:text-cw-accent-hover"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}
