import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* Kairoon Professional Button System
 * Unified deep-green style for consistent brand voice.
 * All primary-like variants share same base; semantics kept for future divergence.
 */
const baseSolid = [
  // Subtle vertical gradient for depth (reference style)
  "bg-[linear-gradient(145deg,hsl(var(--primary))_0%,hsl(var(--primary-alt))_60%,hsl(var(--primary))_100%)]",
  "text-primary-foreground",
  "shadow-[0_0_0_1px_hsl(var(--primary)/0.55),0_4px_10px_-2px_hsl(var(--primary)/0.5)]",
  "hover:bg-[hsl(var(--primary))]/90",
  "hover:shadow-[0_0_0_1px_hsl(var(--primary)/0.6),0_6px_14px_-2px_hsl(var(--primary)/0.55)]",
  "active:bg-[hsl(var(--primary))]/80",
  "active:shadow-[0_0_0_1px_hsl(var(--primary)/0.55),0_2px_6px_-1px_hsl(var(--primary)/0.45)]",
  "focus-visible:ring-accent/50",
  "disabled:shadow-none",
].join(" ");

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium tracking-tight ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[.985]",
  {
    variants: {
      variant: {
        default: baseSolid,
        hero:
          baseSolid +
          " h-12 px-8 text-base font-semibold hover:-translate-y-0.5",
        secondary: baseSolid + " opacity-90 hover:opacity-100",
        accent: baseSolid,
        success: baseSolid,
        outline:
          "border border-[hsl(var(--primary)/0.6)] text-primary-foreground bg-transparent hover:bg-[hsl(var(--primary))/0.12] focus-visible:ring-accent/40",
        ghost:
          "text-primary-foreground/85 hover:text-primary-foreground hover:bg-[hsl(var(--primary))/0.12]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-[0_0_0_1px_hsl(var(--destructive)/0.6)] focus-visible:ring-destructive/50",
        link: "text-primary-foreground underline-offset-4 hover:underline px-0 h-auto",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
