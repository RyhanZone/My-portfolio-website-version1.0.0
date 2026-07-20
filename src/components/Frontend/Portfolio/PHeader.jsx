export default function PHeader({ activeFilter, setActiveFilter }) {
  const filters = [
    // "All Projects",
    "Full Stack",
    "Frontend",
    "Practice Projects",
  ];


  function handleFilterClick(filter) {
    setActiveFilter(filter.toLowerCase());
  }
  return (
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
      {/* LEFT */}
      <div className="max-w-2xl">
        <span className="text-[var(--primary)] uppercase tracking-[4px] text-sm font-semibold">
          My Work
        </span>

        <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">
          My <span className="text-[var(--primary)]">Projects</span>
        </h2>

        <p className="mt-4 text-[var(--menu-text)] leading-8 max-w-xl">
          Here are some of the projects I've built while learning and working on
          real-world ideas. Each project helped me improve my skills and solve
          practical problems.
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex flex-wrap gap-3">
        {filters.map((item) => (
          <button
            onClick={() => handleFilterClick(item)}
            key={item}
            className={`
              px-6 py-3
              rounded-xl
              border
              transition-all
              duration-300
              font-medium
              cursor-pointer

              ${
                activeFilter === item.toLowerCase()
                  ? "border-[var(--primary)] bg-[rgba(124,255,77,.08)] text-[var(--primary)]"
                  : "border-white/10 text-white hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-[rgba(124,255,77,.05)]"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}