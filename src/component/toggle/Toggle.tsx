"use client";

import "./toggle.css";
import React from "react";
interface ToggleProps {
  id: string;
  name?: string;
  checked?: boolean;
  onChange(e: any): void;
  optionLabels?: any;
  small?: boolean;
  disabled?: boolean;
}

const ToggleSwitch = ({
  id,
  name,
  checked,
  onChange,
  optionLabels,
  small,
  disabled,
}: ToggleProps) => {
  return (
    <div className={"toggle-switch" + (small ? " small-switch" : "")}>
      <input
        type="checkbox"
        name={name}
        className="toggle-switch-checkbox"
        id={id}
        checked={checked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.checked)
        }
        disabled={disabled}
      />

      <label className="toggle-switch-label" htmlFor={id}>
        <span
          className={
            disabled
              ? "toggle-switch-inner toggle-switch-disabled"
              : "toggle-switch-inner"
          }
          data-yes={optionLabels[0]}
          data-no={optionLabels[1]}
        />
        <span
          className={
            disabled
              ? "toggle-switch-switch toggle-switch-disabled"
              : "toggle-switch-switch"
          }
        />
      </label>
    </div>
  );
};

export default ToggleSwitch;
