export default function Experiences() {
  return (
    <div className="w-full flex flex-col gap-10">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            My <span className="text-[var(--primary)]">Experience</span>
          </h2>

          <p className="text-[var(--menu-text)] mt-2 text-sm max-w-xl">
            Here's a quick summary of my professional journey. I have worked on
            diverse projects and with amazing teams.
          </p>
        </div>

        <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--primary)]/30 bg-[rgba(124,255,77,.05)] text-[var(--primary)] text-sm">
          <i className="bi bi-calendar2-check"></i>
          3+ Years Experience
        </div>
      </div>

      {/* TIMELINE  lg:h-[600px] */}
      <div className="relative overflow-y-auto pr-2">
        {/* line */}
        <div className="hidden lg:block absolute left-6 top-0 h-full w-[2px] bg-[rgba(124,255,77,.2)]"></div>

        <div>
          
          {/* ITEM 1 */}
          <div className="relative lg:pl-16 mb-10">
            <div className="absolute hidden lg:block left-3 top-2 w-6 h-6 rounded-full bg-[var(--primary)] shadow-[0_0_20px_rgba(124,255,77,.4)]"></div>

            <div className="p-5 lg:p-6 rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] backdrop-blur-xl">
              <span className="text-xs text-[var(--primary)] font-semibold">
                2026 - Present
              </span>

              <h3 className="text-lg lg:text-xl font-bold text-white mt-2">
                Junior Web Developer
              </h3>

              <p className="text-sm text-[var(--menu-text)] mt-2">
                Zeireed • Dhaka, Bangladesh
              </p>

              <p className="text-sm text-[var(--menu-text)] mt-3 leading-relaxed">
                Developed responsive and user-friendly web applications using
                WordPress and Duda.
              </p>
            </div>
          </div>
          {/* ITEM 2 */}
          <div className="relative lg:pl-16 mb-10">
            <div className="absolute hidden lg:block left-3 top-2 w-6 h-6 rounded-full bg-[var(--primary)] shadow-[0_0_20px_rgba(124,255,77,.4)]"></div>

            <div className="p-5 lg:p-6 rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] backdrop-blur-xl">
              <span className="text-xs text-[var(--primary)] font-semibold">
                2024 - Present
              </span>

              <h3 className="text-lg lg:text-xl font-bold text-white mt-2">
                Frontend Developer
              </h3>

              <p className="text-sm text-[var(--menu-text)] mt-2">
                Frontend Mentor • frontendmentor.io
              </p>

              <p className="text-sm text-[var(--menu-text)] mt-3 leading-relaxed">
                Developed responsive and user-friendly web applications using
                React.js and modern JavaScript.
              </p>
            </div>
          </div>
          
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl border border-white/10 text-center">
          <h3 className="text-[var(--primary)] text-2xl font-bold">3+</h3>
          <p className="text-sm text-[var(--menu-text)]">Years Experience</p>
        </div>

        <div className="p-4 rounded-xl border border-white/10 text-center">
          <h3 className="text-[var(--primary)] text-2xl font-bold">20+</h3>
          <p className="text-sm text-[var(--menu-text)]">Projects</p>
        </div>

        <div className="p-4 rounded-xl border border-white/10 text-center">
          <h3 className="text-[var(--primary)] text-2xl font-bold">10+</h3>
          <p className="text-sm text-[var(--menu-text)]">Clients</p>
        </div>

        <div className="p-4 rounded-xl border border-white/10 text-center">
          <h3 className="text-[var(--primary)] text-2xl font-bold">5+</h3>
          <p className="text-sm text-[var(--menu-text)]">Technologies</p>
        </div>
      </div>
    </div>
  );
}
