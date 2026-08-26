import type { ElementType, ReactNode } from "react";
import { cn } from "../../lib/cn";

export function Container({
  children,
  className,
  as: Comp = "div",
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Header/footer use a slightly wider max-width than the reading-width content sections. */
  wide?: boolean;
}) {
  return (
    <Comp className={cn("container-page", className)} style={wide ? { maxWidth: "1560px" } : undefined}>
      {children}
    </Comp>
  );
}
