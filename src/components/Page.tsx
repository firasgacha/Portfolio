import type { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  className?: string;
}

export function Page({ children, className = "" }: PageProps) {
  return (
    <main
      id="main-content"
      className={`mx-auto flex w-full max-w-screen-2xl flex-col overflow-hidden px-4 ${className}`}
    >
      {children}
    </main>
  );
}
