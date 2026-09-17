type BadgeProps = {
  children: React.ReactNode;
  dot?: boolean;
  className?: string;
  variant?: "default" | "accent";
};

export function Badge({ children, dot, className = "", variant = "default" }: BadgeProps) {
  const base = variant === "accent" ? "chip-accent" : "chip";
  return (
    <span className={`${base} label-caps ${className}`}>
      {dot && (
        <span className="h-2 w-2 rounded-full bg-franklyn-tertiary" aria-hidden />
      )}
      {children}
    </span>
  );
}
