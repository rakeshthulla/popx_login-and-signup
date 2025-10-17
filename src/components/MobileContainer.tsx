import { ReactNode } from "react";

interface MobileContainerProps {
  children: ReactNode;
}

export const MobileContainer = ({ children }: MobileContainerProps) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="w-full max-w-[375px] min-h-screen bg-card shadow-2xl">
        {children}
      </div>
    </div>
  );
};
