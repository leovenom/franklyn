type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  featured?: boolean;
  padding?: "sm" | "md" | "lg";
  headerColor?: "violet" | "pink" | "amber" | "mint" | "sky";
  header?: string;
};

const paddingMap = {
  sm: "p-5",
  md: "p-6",
  lg: "p-8",
};

const headerClass = {
  violet: "feature-header-violet",
  pink: "feature-header-pink",
  amber: "feature-header-amber",
  mint: "bg-franklyn-quaternary px-4 py-2 font-display text-sm font-bold text-franklyn-ink rounded-t-md",
  sky: "feature-header-sky",
};

export function Card({
  children,
  className = "",
  hover = false,
  featured = false,
  padding = "md",
  headerColor,
  header,
}: CardProps) {
  const surface = featured ? "sticker-card-featured" : hover ? "sticker-card-hover" : "sticker-card";

  if (header && headerColor) {
    return (
      <div className={`overflow-hidden ${surface} ${className}`}>
        <div className={headerClass[headerColor]}>{header}</div>
        <div className={paddingMap[padding]}>{children}</div>
      </div>
    );
  }

  return <div className={`${surface} ${paddingMap[padding]} ${className}`}>{children}</div>;
}
