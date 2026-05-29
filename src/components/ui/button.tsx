import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type ClassValue } from "clsx";
import { cn } from "@/lib/utils";

const variants: Record<string, ClassValue> = {
  primary:
    "bg-blue-500 text-white shadow-glow hover:bg-blue-400 hover:shadow-[0_0_64px_rgba(80,142,255,.32)]",
  ghost: "bg-white/[0.045] text-slate-200 hover:bg-white/[0.09]",
  outline: "border border-white/10 bg-white/[0.035] text-slate-100 hover:border-blue-300/40 hover:bg-white/[0.08]",
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: keyof typeof variants;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
