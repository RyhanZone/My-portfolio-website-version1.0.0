import PHeader from "./PHeader";
import FeaturedProject from "./FeaturedProject";
import ProjectGrid from "./ProjectGrid";
// import ViewMoreButton from "./ViewMoreButton";
import { useState } from "react";


export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('full stack');
  return (
    <section id="portfolio" className="py-24 bg-[radial-gradient(circle_at_top_right,rgba(124,255,77,.05),transparent_35%),#101720]">
      <div className="max-w-[var(--max-width)] mx-auto px-6 flex flex-col gap-12">

        <PHeader activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

        <FeaturedProject />

        <ProjectGrid activeFilter={activeFilter} />

        {/* <ViewMoreButton /> */}

      </div>
    </section>
  );
}