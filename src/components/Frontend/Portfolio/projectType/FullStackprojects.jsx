
const projects = [
  {
    title: "Portfolio Website",
    image: "/projectsimg/fullstack/portfolio-home.webp",
    category: "Full Stack",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    githubLink: "https://github.com/RyhanZone/My-Portfolio-website-source-code",
    liveLink: "#"
  },
];
export default function FullStackprojects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="
            group
            rounded-2xl
            border
            border-white/10
            bg-[rgba(255,255,255,.03)]
            backdrop-blur-xl
            transition-all
            overflow-hidden
            duration-300
            hover:border-[var(--primary)]
            hover:-translate-y-2
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
                duration-500
                group-hover:scale-110
              "
            />

            <div className=" absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
              <button
                onClick={() => window.open(project.liveLink, "_blank")}
                className="
                  h-12
                  w-12
                  rounded-full
                  bg-[var(--primary)]
                  text-black
                  hover:scale-110
                  hover:cursor-pointer
                  transition
                "
              >
                <i className="bi bi-box-arrow-up-right"></i>
              </button>

              <button
                onClick={() => window.open(project.githubLink, "_blank")}
                className="
                  h-12
                  w-12
                  rounded-full
                  border
                  border-white
                  text-white
                  hover:bg-white
                  hover:text-black
                  hover:cursor-pointer
                  transition
                "
              >
                <i className="bi bi-github"></i>
              </button>
            </div>

            <span
              className="
                absolute
                top-4
                left-4
                px-3
                py-1
                rounded-full
                bg-[rgba(124,255,77,.12)]
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
            <h3 className="text-2xl font-semibold text-white">
              {project.title}
            </h3>

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

            {/* <button
              className="
                w-fit
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
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
}
