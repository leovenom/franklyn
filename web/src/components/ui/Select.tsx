import { forwardRef } from "react";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className = "", children, ...props },
  ref,
) {
  return (
    <select ref={ref} className={`ds-select ${className}`} {...props}>
      {children}
    </select>
  );
});
