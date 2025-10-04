import type { PostKeys } from '../../App.tsx';

export type SelectOption = { value: string; title: string };

export type SelectProps = {
  options: SelectOption[];
  defaultValue: string;
  value: string;
  onChange: (value: PostKeys) => void;
};

export const Select = ({ options, defaultValue, value, onChange }: SelectProps) => {
  return (
    <div className="relative">
      <select
        className="h-[48px] w-full appearance-none rounded-lg border-1 border-zinc-200 bg-white px-4"
        value={value}
        onChange={(e) => onChange(e.target.value as PostKeys)}
      >
        <option value="" disabled>
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
        <svg
          className="h-4 w-4 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};
