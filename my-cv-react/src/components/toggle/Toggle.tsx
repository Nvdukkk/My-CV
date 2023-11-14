interface ToggleProps {
  id: string;
  name?: string;
  checked?: boolean;
  onChange(e: any): void;
  optionLabels?: any;
  className?: string;
}

const Toggle = ({
  id,
  name,
  checked,
  onChange,
  optionLabels,
  className,
}: ToggleProps) => {
  return (
    <div
      className={`relative w-[75px] inline-block align-middle text-left select-none ${
        className && className
      }`}
    >
      <input
        type="checkbox"
        name={name}
        className="toggle-switch-checkbox hidden"
        id={id}
        checked={checked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.checked)
        }
      />

      <label
        className="toggle-switch-label block overflow-hidden cursor-pointer border-0 border-solid border-gray-500 rounded-3xl m-0"
        htmlFor={id}
      >
        <span
          className={"toggle-switch-inner"}
          data-yes={optionLabels?.[0]}
          data-no={optionLabels?.[1]}
        />
        <span
          className={
            "toggle-switch-switch block w-6 m-1 bg-white absolute top-0 bottom-0 right-10 border-0 border-solid border-gray-300 rounded-3xl ease-in duration-300"
          }
        />
      </label>
    </div>
  );
};

export default Toggle;
