type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`ds-section ${className}`}>
      <div className="page-shell">{children}</div>
    </section>
  );
}
