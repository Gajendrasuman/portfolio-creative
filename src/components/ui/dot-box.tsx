"use client";
import { cn } from "@/lib/cn";

interface DotBoxProps {
  v_count?: number;
  h_count?: number;
  size?: number;
  color?: string;
  xgap?: number;
  ygap?: number;
  className?: string;
  rounded?: boolean;
}

export default function DotBox({
  v_count = 5,
  h_count = 5,
  size = 4,
  color = "#fff",
  xgap = 9,
  ygap = 9,
  className,
  rounded = true,
}: DotBoxProps) {
  return (
    <div className={className}>
      {Array.from({ length: v_count }, (_, index) => (
        <div key={index} className="flex items-center">
          {Array.from({ length: h_count }, (_, index) => (
            <div
              key={index}
              style={{
                width: size,
                aspectRatio: 1,
                margin: `${ygap}px ${xgap}px`,
                backgroundColor: color,
              }}
              className={cn(rounded && "rounded-full")}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}
