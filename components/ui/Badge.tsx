import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "moss" | "earth";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase",
        variant === "default" &&
          "bg-forest-100 text-forest-800",
        variant === "moss" && "bg-moss/15 text-moss-dark",
        variant === "earth" && "bg-earth-100 text-earth-800"
      )}
    >
      {children}
    </span>
  );
}
