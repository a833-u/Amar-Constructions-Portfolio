import React from "react";
import ShinyText from "./ShinyText";
import { cn } from "@/lib/utils";

interface AvailabilityBadgeProps {
  text: string;
  className?: string;
}

const AvailabilityBadge = ({ text, className }: AvailabilityBadgeProps) => {
  return (
    <span
      className={cn(
        "py-3 px-6 rounded-full bg-[#28282c] border border-[#222222] flex items-center gap-4",
        className
      )}
    >
      {/* Ping Dot */}
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
      </span>

      {/* Editable Shiny Text */}
      <ShinyText
        text={text}
        speed={2}
        delay={0}
        color="#b5b5b5"
        shineColor="#ffffff"
        spread={120}
        direction="left"
      />
    </span>
  );
};

export default AvailabilityBadge;