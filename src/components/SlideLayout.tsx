import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "paper" | "navy";
  footerLeft?: string;
  footerRight?: string;
}

export default function SlideLayout({ children, variant = "paper", footerLeft, footerRight }: Props) {
  const bg = variant === "navy" ? "bg-ge-navy text-ge-paper" : "bg-ge-paper text-ge-ink";
  return (
    <div className={`relative w-full h-full overflow-hidden ${bg}`}>
      <div className="absolute inset-0 px-24 pt-20 pb-16 flex flex-col">
        {children}
      </div>
      {(footerLeft || footerRight) && (
        <div className="absolute bottom-6 left-24 right-24 flex justify-between text-[14px] tracking-wide opacity-60">
          <span>{footerLeft}</span>
          <span>{footerRight}</span>
        </div>
      )}
    </div>
  );
}
