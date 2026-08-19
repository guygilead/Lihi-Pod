import { cn } from "@/lib/utils";

type FieldProps = {
  label: string;
  name: string;
  as?: "input" | "textarea" | "select";
  type?: string;
  required?: boolean;
  error?: string;
  value: string;
  onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  placeholder?: string;
  dir?: "rtl" | "ltr";
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  autoComplete?: string;
  rows?: number;
  className?: string;
  children?: React.ReactNode;
};

export function Field({
  label,
  name,
  as = "input",
  type = "text",
  required,
  error,
  value,
  onChange,
  placeholder,
  dir,
  inputMode,
  autoComplete,
  rows = 4,
  className,
  children,
}: FieldProps) {
  const errorId = error ? `${name}-error` : undefined;
  const control = cn(
    "w-full rounded-xl border bg-paper px-4 py-3 text-ink transition-colors placeholder:text-muted/55",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40",
    error ? "border-red-400" : "border-line focus:border-gold",
  );

  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-ink"
      >
        {label}
        {required && (
          <span className="text-gold-deep" aria-hidden>
            {" "}
            *
          </span>
        )}
      </label>

      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          dir={dir}
          rows={rows}
          aria-invalid={!!error}
          aria-describedby={errorId}
          className={cn(control, "min-h-28 resize-y")}
        />
      ) : as === "select" ? (
        <select
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={errorId}
          className={cn(control, "appearance-none bg-[length:0] pe-4")}
        >
          {children}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          dir={dir}
          inputMode={inputMode}
          autoComplete={autoComplete}
          aria-invalid={!!error}
          aria-describedby={errorId}
          className={control}
        />
      )}

      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
