"use client";
import ToggleSwitch from "@/component/toggle";

export default function Home() {
  return (
    <ToggleSwitch
      id="lang"
      onChange={(e) => console.log(e)}
      optionLabels={["VN", "EN"]}
    />
  );
}
