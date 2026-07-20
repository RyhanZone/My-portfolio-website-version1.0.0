export default function CTASection() {
 const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="relative mt-24 overflow-hidden rounded-[32px] border border-[var(--primary)]/20 bg-[rgba(255,255,255,.02)]">

      {/* Glow */}
      <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--primary)] opacity-10 blur-[140px]"></div>

      <div className="relative z-10 px-8 py-16 lg:px-20 text-center">

        {/* Icon */}

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[var(--primary)]/30 bg-[rgba(124,255,77,.08)]">
          <i className="bi bi-stars text-4xl text-[var(--primary)]"></i>
        </div>

        {/* Heading */}

        <h2 className="mt-8 text-4xl lg:text-5xl font-bold leading-tight text-white">
          Have a <span className="text-[var(--primary)]">Project</span>
          <br />
          In Your Mind?
        </h2>

        {/* Description */}

        <p className="mx-auto mt-6 max-w-2xl text-[var(--menu-text)] leading-8">
          Whether you need a modern website, a full-stack web application, I'm ready to turn your idea into reality.
        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <button
            onClick={() => {scrollToSection('contact')}}
            className="
              group
              rounded-xl
              bg-[var(--primary)]
              px-8
              py-4
              font-semibold
              text-black
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_0_35px_rgba(124,255,77,.35)]
            "
          >
            Let's Work Together

            <i className="bi bi-arrow-right ml-2 transition group-hover:translate-x-1"></i>
          </button>

          <button
            onClick={() => {scrollToSection('portfolio')}}
            className="
              group
              rounded-xl
              border
              border-white/10
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:border-[var(--primary)]
              hover:text-[var(--primary)]
            "
          >
            View Portfolio

            <i className="bi bi-grid ml-2"></i>
          </button>

        </div>

        {/* Bottom */}

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">

          <div className="flex items-center gap-2 text-[var(--menu-text)]">
            <i className="bi bi-check-circle-fill text-[var(--primary)]"></i>

            <span>Fast Delivery</span>
          </div>

          <div className="flex items-center gap-2 text-[var(--menu-text)]">
            <i className="bi bi-check-circle-fill text-[var(--primary)]"></i>

            <span>Clean Code</span>
          </div>

          <div className="flex items-center gap-2 text-[var(--menu-text)]">
            <i className="bi bi-check-circle-fill text-[var(--primary)]"></i>

            <span>Responsive Design</span>
          </div>

          <div className="flex items-center gap-2 text-[var(--menu-text)]">
            <i className="bi bi-check-circle-fill text-[var(--primary)]"></i>

            <span>Lifetime Support</span>
          </div>

        </div>

      </div>
    </div>
  );
}