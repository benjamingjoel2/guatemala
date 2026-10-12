import { cn } from "@/lib/utils";

/** Underline-only inputs with small labels — the reference's form style. */
export const inputClass =
  "w-full border-0 border-b border-line-strong bg-transparent pb-3 pt-1 text-lg tracking-[-0.03em] text-bone placeholder:text-faint transition-colors focus:border-jade-light focus:outline-none aria-[invalid=true]:border-adobe";

export function Field({
  label,
  htmlFor,
  error,
  hint,
  children,
  className,
  required,
}: {
  label: string;
  htmlFor?: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="t-xs text-mute">
        {label}
        {required && <span className="text-adobe"> *</span>}
      </label>
      {children}
      {error ? (
        <p id={htmlFor ? `${htmlFor}-error` : undefined} className="t-xs text-adobe" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p className="t-xs text-faint">{hint}</p>
      ) : null}
    </div>
  );
}

export function Fieldset({
  legend,
  error,
  children,
  className,
  required,
}: {
  legend: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}) {
  return (
    <fieldset className={cn("flex flex-col gap-3", className)}>
      <legend className="t-xs mb-3 text-mute">
        {legend}
        {required && <span className="text-adobe"> *</span>}
      </legend>
      {children}
      {error && (
        <p className="t-xs text-adobe" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}

/** Toggle chip used for radio/checkbox-like choices. */
export function Chip({
  selected,
  onClick,
  children,
  role = "radio",
  className,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  role?: "radio" | "checkbox";
  className?: string;
}) {
  return (
    <button
      type="button"
      role={role}
      aria-checked={selected}
      onClick={onClick}
      className={cn(
        "t-btn inline-flex min-h-11 items-center gap-2 border px-4 py-2 text-left transition-colors duration-200",
        selected ? "border-jade-light bg-jade/25 text-bone" : "border-line-strong text-mute hover:border-bone/50 hover:text-bone",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "flex size-3.5 shrink-0 items-center justify-center border",
          role === "radio" && "rounded-full",
          selected ? "border-jade-light bg-jade-light" : "border-bone/40",
        )}
      >
        {selected && <span className={cn("size-1.5 bg-ink", role === "radio" && "rounded-full")} />}
      </span>
      {children}
    </button>
  );
}

export function Stepper({
  id,
  value,
  onChange,
  min,
  max,
  label,
}: {
  id: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  label: string;
}) {
  return (
    <div className="flex items-center gap-0 border border-line-strong">
      <button
        type="button"
        aria-label={`Decrease ${label}`}
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
        className="flex size-11 items-center justify-center text-xl transition-colors hover:bg-line disabled:opacity-30"
      >
        −
      </button>
      <input
        id={id}
        aria-label={label}
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
          const n = parseInt(e.target.value, 10);
          if (!Number.isNaN(n)) onChange(Math.min(max, Math.max(min, n)));
        }}
        className="h-11 w-14 border-x border-line-strong bg-transparent text-center text-lg [appearance:textfield] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <button
        type="button"
        aria-label={`Increase ${label}`}
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
        className="flex size-11 items-center justify-center text-xl transition-colors hover:bg-line disabled:opacity-30"
      >
        +
      </button>
    </div>
  );
}
