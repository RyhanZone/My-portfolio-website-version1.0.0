import SkillCard from "./SkillCard";
export default function Skills() {
  return (
    <div className="w-full flex flex-col gap-10 overflow-y-scroll custom-scroll">
      {/* HEADER */}
      <div>
        <h2 className="text-4xl font-bold text-white">
          My <span className="text-[var(--primary)]">Skills</span>
        </h2>
        <p className="text-[var(--menu-text)] mt-2 text-sm max-w-xl">
          Here are the technologies and tools I use to build modern and scalable
          web applications.
        </p>
      </div>

      {/* FRONTEND */}
      <div className="flex flex-col gap-5">
        <h3 className="text-white text-lg font-semibold flex items-center gap-2">
          <i className="bi bi-laptop text-[var(--primary)]"></i>
          Frontend Development
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* React */}
          
          <SkillCard icon="bi bi-filetype-html" name="HTML5" percent="95" />
          <SkillCard icon="bi bi-filetype-css" name="CSS3" percent="98" />
          <SkillCard icon="bi bi-filetype-scss" name="SASS" percent="85" />
          <SkillCard icon="bi bi-filetype-js" name="JavaScript" percent="93" />
          <SkillCard icon="bi bi-wind" name="Tailwind CSS" percent="92" />
        </div>
      </div>

      {/* BACKEND */}
      <div className="flex flex-col gap-5">
        <h3 className="text-white text-lg font-semibold flex items-center gap-2">
          <i className="bi bi-server text-[var(--primary)]"></i>
          Backend Development
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SkillCard icon="bi bi-node-plus" name="PHP" percent="90" />
          <SkillCard icon="bi bi-database" name="MySQL" percent="75" />
        </div>
      </div>

      {/* TOOLS */}
      <div className="flex flex-col gap-5">
        <h3 className="text-white text-lg font-semibold flex items-center gap-2">
          <i className="bi bi-tools text-[var(--primary)]"></i>
          Tools & Others
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SkillCard icon="bi bi-git" name="Git" percent="85" />
          <SkillCard icon="bi bi-github" name="GitHub" percent="90" />
          <SkillCard icon="bi bi-code-slash" name="VS Code" percent="90" />
          <SkillCard icon="bi bi-bezier" name="Figma" percent="80" />
          {/* <SkillCard icon="bi bi-send" name="Postman" percent="75" /> */}
          {/* <SkillCard icon="bi bi-box" name="Docker" percent="70" /> */}
        </div>
      </div>
    </div>
  );
}
