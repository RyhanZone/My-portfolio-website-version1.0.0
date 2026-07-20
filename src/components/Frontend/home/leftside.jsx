export default function LeftSide() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className="
        w-full 
        lg:w-[45%] 
        pt-20 lg:pt-16 
        flex flex-col 
        gap-5 md:gap-6
        px-4 sm:px-6 lg:px-0
      "
    >
      {/* SMALL INTRO */}
      <div
        className="
          w-fit px-3 md:px-4 py-2
          rounded-full
          border border-[var(--primary)]
          text-[var(--primary)]
          text-xs md:text-sm
          flex items-center gap-2
          bg-[rgba(124,255,77,0.05)]
        "
      >
        👋 Hello, I'm Rafi
      </div>

      {/* MAIN HEADING */}
      <h1
        className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          font-extrabold leading-tight
          text-white
        "
      >
        I Build <span className="text-[var(--primary)]">Modern Web </span>
        Experiences That <span className="text-[var(--primary)]">Perform</span>
      </h1>

      {/* DESCRIPTION */}
      <p
        className="
          text-[var(--menu-text)]
          text-sm md:text-base
          max-w-xl leading-relaxed
        "
      >
        I'm a Full Stack Developer specializing in React, PHP & MySQL. I build
        fast, secure and scalable web applications that help businesses grow.
      </p>

      {/* CTA BUTTONS */}
      <div className="flex gap-3 md:gap-4 mt-2 flex-wrap">
        <a
          href="/Resue.pdf"
          download="Ryhan Rafi CV.pdf"
          className="
        inline-block
        px-4 md:px-6 py-2 md:py-3
        rounded-xl
        bg-[var(--primary)]
        text-black font-semibold
        shadow-[0_0_25px_rgba(124,255,77,0.3)]
        hover:scale-105 transition
      "
        >
          Download CV
        </a>
        <button
            onClick={() => scrollToSection("resume")}
          className="
            px-4 md:px-6 py-2 md:py-3
            rounded-xl
            border border-[var(--primary)]
            text-[var(--primary)]
            hover:bg-[var(--primary)]
            hover:text-black
            transition
            text-sm md:text-base
          "
        >
          View My Work →
        </button>
      </div>

      {/* SOCIAL */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <p className="text-[var(--menu-text)] text-sm">Find me on:</p>

        <div className="flex gap-3 md:gap-4">
          <div onClick={() => {window.open("https://github.com/RyhanZone", "_blank")}} className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full border border-white/10 text-[var(--menu-text)] hover:text-[var(--primary)] hover:border-[var(--primary)] cursor-pointer transition">
            <i className="bi bi-github text-[16px] md:text-[18px]"></i>
          </div>

          <div onClick={() => {window.open("https://www.linkedin.com/in/ryhan-rafi-329024346/", "_blank")}} className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full border border-white/10 text-[var(--menu-text)] hover:text-[var(--primary)] hover:border-[var(--primary)] cursor-pointer transition">
            <i className="bi bi-linkedin text-[16px] md:text-[18px]"></i>
          </div>

          <div onClick={() => {window.open("https://www.facebook.com/ryhan.rafi.974546", "_blank")}} className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full border border-white/10 text-[var(--menu-text)] hover:text-[var(--primary)] hover:border-[var(--primary)] cursor-pointer transition">
            <i className="bi bi-facebook text-[16px] md:text-[18px]"></i>
          </div>
        </div>
      </div>

      {/* CODE SECTION */}
      <div className="mt-4 flex flex-col gap-4 w-full md:w-[90%] lg:w-[80%]">
        <div className="p-3 md:p-4 rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] backdrop-blur-md">
          {/* top bar */}
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-red-500"></span>
            <span className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-yellow-400"></span>
            <span className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-green-500"></span>

            <p className="ml-auto text-[10px] md:text-xs text-[var(--menu-text)]">
              about.me.js
            </p>
          </div>

          {/* code */}
          <pre className="text-[10px] md:text-sm text-green-300 leading-relaxed overflow-x-auto">
            {`const developer = {
    name: "Ryhan Rafi",
    stack: [HTML", "CSS", React", "PHP", "MySQL"],
    passion: "Building Scalable Web Apps",
    status: "Available for Opportunities"
};

// Let's build something amazing together 🚀`}
          </pre>
        </div>
      </div>
    </div>
  );
}
