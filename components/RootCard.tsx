import type { ReactNode } from "react";

export default function RootCard({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`root-card ${className}`}>{children}</div>;
}
