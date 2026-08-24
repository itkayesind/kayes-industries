import type React from "react";
import { cn } from "@/lib/utils";

interface ElegantPatternProps {
  children?: React.ReactNode;
  className?: string;
  theme?: "light" | "dark";
}

export function ElegantPatternBg({ 
  children, 
  className,
  theme = "light" 
}: ElegantPatternProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden select-none",
        isDark ? "bg-black text-white" : "bg-white text-slate-900",
        className
      )}
    >
      {/* Background Masked Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "radial-gradient(100% 100% at 0% 0%, rgb(46, 46, 46) 0%, rgb(0, 0, 0) 100%)"
              : "radial-gradient(100% 100% at 0% 0%, rgba(248, 250, 252, 0.9) 0%, rgba(255, 255, 255, 1) 100%)",
            mask: isDark
              ? "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)"
              : "radial-gradient(125% 100% at 0% 0%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 85%, rgba(0, 0, 0, 0.4) 100%)",
            WebkitMask: isDark
              ? "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)"
              : "radial-gradient(125% 100% at 0% 0%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 85%, rgba(0, 0, 0, 0.4) 100%)",
          }}
        >
          {/* Skewed fading subtle streaks */}
          <div
            className={cn(
              "absolute inset-0",
              isDark ? "opacity-20" : "opacity-[0.06]"
            )}
            style={{
              background: isDark
                ? "linear-gradient(rgb(0, 207, 255) 0%, rgba(0, 207, 255, 0) 100%)"
                : "linear-gradient(rgb(148, 163, 184) 0%, rgba(203, 213, 225, 0) 100%)",
              mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              WebkitMask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
          <div
            className={cn(
              "absolute inset-0",
              isDark ? "opacity-20" : "opacity-[0.05]"
            )}
            style={{
              background: isDark
                ? "linear-gradient(rgb(0, 207, 255) 0%, rgba(0, 207, 255, 0) 100%)"
                : "linear-gradient(rgb(100, 116, 139) 0%, rgba(203, 213, 225, 0) 100%)",
              mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              WebkitMask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
          <div
            className={cn(
              "absolute inset-0",
              isDark ? "opacity-20" : "opacity-[0.06]"
            )}
            style={{
              background: isDark
                ? "linear-gradient(rgb(0, 207, 255) 0%, rgba(0, 207, 255, 0) 100%)"
                : "linear-gradient(rgb(148, 163, 184) 0%, rgba(203, 213, 225, 0) 100%)",
              mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 9%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 28%, rgba(0, 0, 0, 0.424) 40%, rgb(0, 0, 0) 48%, rgba(0, 0, 0, 0.267) 54%, rgba(0, 0, 0, 0.13) 78%, rgb(0, 0, 0) 88%, rgba(0, 0, 0, 0) 97%)",
              WebkitMask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 9%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 28%, rgba(0, 0, 0, 0.424) 40%, rgb(0, 0, 0) 48%, rgba(0, 0, 0, 0.267) 54%, rgba(0, 0, 0, 0.13) 78%, rgb(0, 0, 0) 88%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
          <div
            className={cn(
              "absolute inset-0",
              isDark ? "opacity-20" : "opacity-[0.05]"
            )}
            style={{
              background: isDark
                ? "linear-gradient(rgb(0, 207, 255) 0%, rgba(0, 207, 255, 0) 100%)"
                : "linear-gradient(rgb(100, 116, 139) 0%, rgba(203, 213, 225, 0) 100%)",
              mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17%, rgba(0, 0, 0, 0.55) 26%, rgb(0, 0, 0) 35%, rgba(0, 0, 0, 0) 47%, rgba(0, 0, 0, 0.13) 69%, rgb(0, 0, 0) 79%, rgba(0, 0, 0, 0) 97%)",
              WebkitMask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17%, rgba(0, 0, 0, 0.55) 26%, rgb(0, 0, 0) 35%, rgba(0, 0, 0, 0) 47%, rgba(0, 0, 0, 0.13) 69%, rgb(0, 0, 0) 79%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
          <div
            className={cn(
              "absolute inset-0",
              isDark ? "opacity-20" : "opacity-[0.06]"
            )}
            style={{
              background: isDark
                ? "linear-gradient(rgb(0, 207, 255) 0%, rgba(0, 207, 255, 0) 100%)"
                : "linear-gradient(rgb(148, 163, 184) 0%, rgba(203, 213, 225, 0) 100%)",
              mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 27%, rgb(0, 0, 0) 42%, rgba(0, 0, 0, 0.48) 48%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 74%, rgb(0, 0, 0) 82%, rgba(0, 0, 0, 0.47) 88%, rgba(0, 0, 0, 0) 97%)",
              WebkitMask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 27%, rgb(0, 0, 0) 42%, rgba(0, 0, 0, 0.48) 48%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 74%, rgb(0, 0, 0) 82%, rgba(0, 0, 0, 0.47) 88%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
        </div>
      </div>

      {/* Subtle Dot Pattern Overlay */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none",
          isDark ? "opacity-20" : "opacity-[0.18]"
        )}
        style={{
          backgroundImage: isDark
            ? "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)"
            : "radial-gradient(circle at 1px 1px, rgba(100,116,139,0.35) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle Radial Highlight */}
      <div 
        className={cn(
          "absolute inset-0 pointer-events-none",
          isDark 
            ? "bg-gradient-radial from-slate-800/20 via-transparent to-transparent" 
            : "bg-gradient-to-b from-slate-100/50 via-transparent to-slate-50/30"
        )} 
      />

      {/* Content Container */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between items-center">
        {children}
      </div>
    </div>
  );
}

export const DarkGradientBg = ElegantPatternBg;
