import { useState } from "react";

const OPTIONS = [
  { key: "blended", file: "blended-bgs.jpg", label: "blended-bgs.jpg" },
  { key: "old", file: "home_screen_v2.jpg", label: "home_screen_v2.jpg (old)" },
  { key: "alt", file: "alternate-start-bgs.jpg", label: "alternate-start-bgs.jpg" },
];

export default function TestBackground() {
  const [active, setActive] = useState("blended");
  const current = OPTIONS.find((o) => o.key === active);

  return (
    <div className="test-bg">
      <div className="test-bg__toggle">
        {OPTIONS.map((o) => (
          <button
            key={o.key}
            className={active === o.key ? "active" : ""}
            onClick={() => setActive(o.key)}
          >
            {o.label}
          </button>
        ))}
      </div>
      <img
        src={`/test-bg/${current.file}`}
        alt={`Background test — ${current.label}`}
        className="test-bg__image"
      />
    </div>
  );
}
