import Link from "next/link";
import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "btn-candy",
  secondary: "btn-outline",
  ghost: "nav-link rounded-lg px-3 py-2 font-medium text-franklyn-muted hover:text-franklyn-ink",
};

const sizes: Record<Size, string> = {
  sm: "h-10 min-h-[48px] px-4 text-xs md:min-h-0 md:h-10",
  md: "h-12 min-h-[48px] px-5 text-sm md:min-h-0 md:h-12",
  lg: "h-14 min-h-[48px] px-6 text-sm md:min-h-0 md:h-14",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  showArrow?: boolean;
  children: React.ReactNode;
} & (
  | ({ href: string } & Omit<React.ComponentProps<typeof Link>, "className">)
  | ({ href?: never } & React.ButtonHTMLAttributes<HTMLButtonElement>)
);

function ArrowIcon() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-franklyn-accent">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </span>
  );
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", className = "", showArrow = false, children, ...props },
    ref,
  ) {
    const base = "inline-flex items-center justify-center gap-2 disabled:pointer-events-none disabled:opacity-50";
    const classes = `${base} ${variants[variant]} ${variant !== "ghost" ? sizes[size] : ""} ${className}`;

    const content = (
      <>
        {children}
        {showArrow && variant === "primary" && <ArrowIcon />}
      </>
    );

    if ("href" in props && props.href) {
      const { href, ...linkProps } = props;
      return (
        <Link ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes} {...linkProps}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  },
);
