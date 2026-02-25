import React from "react";
import GradientText from "./GradientText";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
}

const SectionHeading = ({
  children,
  className,
  colors = ["#6f5320", "#e2ca76", "#fff3c4", "#e2ca76", "#6f5320"],
  animationSpeed = 4,
}: SectionHeadingProps) => {
  return (
    <GradientText
      colors={colors}
      animationSpeed={animationSpeed}
      showBorder={false}
      className={cn(className)}
    >
      {children}
    </GradientText>
  );
};

export default SectionHeading;