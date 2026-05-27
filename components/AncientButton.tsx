import Link from "next/link";
import type { ComponentType, ReactNode } from "react";
import type { LucideProps } from "lucide-react";

type AncientButtonProps = {
  href: string;
  children: ReactNode;
  icon?: ComponentType<LucideProps>;
  variant?: "gold" | "ghost";
};

export default function AncientButton({
  href,
  children,
  icon: Icon,
  variant = "gold"
}: AncientButtonProps) {
  return (
    <Link
      href={href}
      className={`ancient-button ${variant === "ghost" ? "ancient-button--ghost" : ""}`}
    >
      {Icon ? <Icon className="size-4" aria-hidden="true" /> : null}
      {children}
    </Link>
  );
}
