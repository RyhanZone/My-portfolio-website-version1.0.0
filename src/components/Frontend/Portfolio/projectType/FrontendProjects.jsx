const projects = [
  {
    title: "Age Calculator",
    image: "/projectsimg/frontend/age-calculator-dekstop.jpg",
    category: "Frontend Project",
    tech: ["HTML" , "CSS" , "Javascript"],
    githubLink: "https://github.com/RyhanZone/Age-Calculator-version-2",
    liveLink: "#"
  },
  {
    title: "Name Design App",
    image: "/projectsimg/frontend/name-design-dekstop.jpg",
    category: "Frontend Project",
    tech: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/RyhanZone/Name-design-app",
    liveLink: "#",
  },
  {
    title: "Quize app",
    image: "/projectsimg/frontend/quize-app-home-page.png",
    category: "Frontend Project",
    tech: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/RyhanZone/Quize-app",
    liveLink: "#",
  }
];
export default function FrontendProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
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

            <div
              className="
                absolute
                inset-0
                bg-black/60
                opacity-0
                group-hover:opacity-100
                transition
                flex
                items-center
                justify-center
                gap-4
              "
            >
              <button
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
