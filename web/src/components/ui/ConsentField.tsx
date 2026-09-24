import Link from "next/link";

type ConsentFieldProps = {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export function ConsentField({ id, checked, onChange, disabled, children }: ConsentFieldProps) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-left">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        required
        className="mt-1 h-4 w-4 shrink-0 rounded border-2 border-franklyn-ink accent-franklyn-accent"
      />
      <span className="text-caption leading-relaxed text-franklyn-muted">{children}</span>
    </label>
  );
}

export function PrivacyLink() {
  return (
    <Link href="/privacy" className="font-medium text-franklyn-accent underline underline-offset-2">
      Política de Privacidade
    </Link>
  );
}
