import type { ReactNode } from "react";

interface ContainerChildren {
  children: ReactNode;
}

const Container = ({ children }: ContainerChildren) => {
  return (
    <div className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-4">
      {children}
    </div>
  );
};

export default Container;
