import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {children}
    </div>
  );
}
