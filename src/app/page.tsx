"use client";
import ToggleSwitch from "@/component/toggle";
import { useState } from "react";
export default function Home() {
  const [vn, setVn] = useState(true);
  return (
    <div className="container">
      <p>Chọn ngôn ngữ</p>
      <ToggleSwitch
        id="lang"
        onChange={(e) => setVn(e)}
        optionLabels={["VN", "EN"]}
      />
    </div>
  );
}
