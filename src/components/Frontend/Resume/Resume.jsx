import RSidebar from "./RSidebar";
import RMainSection from "./RMainSection";
import { useState } from "react";
export default function Resume() {
  const [active, setactive] = useState("Experiences");
  return (
    <section id="resume" className="py-24 lg:py-20 bg-[var(--resume-bg)]">
      <div className="max-w-[var(--max-width)] w-full mx-auto flex flex-col lg:flex-row gap-10 px-6">
        <RSidebar active={active} setactive={setactive} />
        <RMainSection active={active} />
      </div>
    </section>
  );
}
