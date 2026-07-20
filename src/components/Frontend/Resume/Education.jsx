export default function Education() {
  return (
    <div className="w-full flex flex-col gap-10">
      {/* HEADER */}
      <div>
        <h2 className="text-4xl font-bold text-white">
          My <span className="text-[var(--primary)]">Education</span>
        </h2>

        <p className="text-sm text-[var(--menu-text)] mt-2 max-w-2xl">
          My academic background and learning journey that shaped my skills as a
          developer.
        </p>
      </div>

      {/* TIMELINE lg:h-[600px] */}
      <div className="relative">
        {/* LINE */}

        {/* TIMELINE */}
        <div className="relative overflow-y-auto custom-scroll pr-2">
          {/* line */}
          <div className="hidden lg:block absolute left-6 top-0 h-full w-[2px] bg-[rgba(124,255,77,.2)]"></div>

          <div>
            {/* ITEM 1 */}
            <div className="relative lg:pl-16 mb-10">
              <div className="absolute hidden lg:block left-3 top-2 w-6 h-6 rounded-full bg-[var(--primary)] shadow-[0_0_20px_rgba(124,255,77,.4)]"></div>

              <div className="p-5 lg:p-6 rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] backdrop-blur-xl">
                <span className="text-xs text-[var(--primary)] font-semibold">
                  2023 - Present
                </span>

                <h3 className="text-lg lg:text-xl font-bold text-white mt-2">
                  Completed My JDC
                </h3>

                <p className="text-sm text-[var(--menu-text)] mt-2">
                  Danga Dakhil Madrasha • Narsingdi, Bangladesh
                </p>

                <p className="text-sm text-[var(--menu-text)] mt-3 leading-relaxed">
                  Completed my JDC with a strong foundation in Islamic studies
                  and general education, demonstrating my commitment to learning
                  and personal growth.
                </p>
              </div>
            </div>
            {/* ITEM 2 */}
            <div className="relative lg:pl-16 mb-10">
              <div className="absolute hidden lg:block left-3 top-2 w-6 h-6 rounded-full bg-[var(--primary)] shadow-[0_0_20px_rgba(124,255,77,.4)]"></div>

              <div className="p-5 lg:p-6 rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] backdrop-blur-xl">
                <span className="text-xs text-[var(--primary)] font-semibold">
                  2024 - 2026
                </span>
                <h3 className="text-lg lg:text-xl font-bold text-white mt-2">
                  Completed My SSC
                </h3>
                <p className="text-sm text-[var(--menu-text)] mt-2">
                  Danga Dakhil Madrasha • Narsingdi, Bangladesh
                </p>
                  
                <p className="text-sm text-[var(--menu-text)] mt-3 leading-relaxed">
                  Completed my SSC in the Science group with a strong foundation
                  in both Islamic studies and general education, reflecting my
                  commitment to continuous learning, discipline, and personal
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
