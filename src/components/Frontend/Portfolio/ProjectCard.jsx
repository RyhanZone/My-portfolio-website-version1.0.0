export default function ProjectCard({ project }) {
  return (
    <div
      className="
        group
        rounded-2xl
        overflow-hidden
        border
        border-white/10
        bg-[rgba(255,255,255,.03)]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[var(--primary)]
      "
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-[240px]
            object-cover
            transition-all
            duration-500
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/70
            flex
            items-center
            justify-center
            gap-4
            opacity-0
            group-hover:opacity-100
            transition
          "
        >
          <button
            className="
              h-12
              w-12
              rounded-full
              bg-[var(--primary)]
              text-black
              text-lg
              hover:scale-110
              transition
            "
          >
            <i className="bi bi-box-arrow-up-right"></i>
          </button>

          <button
            className="
              h-12
              w-12
              rounded-full
              border
              border-white
              text-white
              text-lg
              hover:bg-white
              hover:text-black
              transition
            "
          >
            <i className="bi bi-github"></i>
          </button>
        </div>

        {/* Category */}
        <span
          className="
            absolute
            top-4
            left-4
            px-3
            py-1
            rounded-full
            bg-[rgba(124,255,77,.08)]
            border
            border-[var(--primary)]
            text-[12px]
            text-[var(--primary)]
          "
        >
          {project.category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col gap-5">
        <div>
          <h3 className="text-2xl font-semibold text-white">
            {project.title}
          </h3>

          <p className="text-sm text-[var(--menu-text)] mt-3 leading-7">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="
                px-3
                py-1
                rounded-full
                border
                border-white/10
                text-xs
                text-[var(--menu-text)]
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <button
            className="
              flex
              items-center
              gap-2
              text-[var(--primary)]
              font-medium
              hover:gap-3
              transition-all
            "
          >
            View Details
            <i className="bi bi-arrow-right"></i>
          </button>

          <span className="text-xs text-[var(--menu-text)]">
            {project.year}
          </span>
        </div>
      </div>
    </div>
  );
}