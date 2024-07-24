export function Label({
  caption: label,
  children,
}: {
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <label>
      <p className="mb-2 mt-6 text-sm font-semibold text-neutral-400">
        {label}
      </p>
      {children}
    </label>
  );
}

type InputProps = {
  name: string;
  value?: string;
  placeholder?: string;
  autofocus?: boolean;
  onChange(value: string): void;
};

export function Input({
  name,
  value,
  placeholder,
  autofocus,
  onChange,
}: InputProps) {
  return (
    <input
      type="text"
      name={name}
      id={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoFocus={autofocus}
      className="w-full rounded-md border border-neutral-400/25 bg-transparent px-4 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 dark:text-white"
    />
  );
}
