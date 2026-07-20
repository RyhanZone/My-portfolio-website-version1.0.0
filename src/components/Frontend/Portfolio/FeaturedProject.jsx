export default function FeaturedProject() {
  return (
    <div
      className="
        rounded-3xl
        border border-[rgba(124,255,77,.18)]
        bg-[rgba(255,255,255,.03)]
        backdrop-blur-xl
        overflow-hidden
      "
    >
      <div className="grid lg:grid-cols-2 gap-10 p-6 lg:p-8 items-center">

        {/* LEFT IMAGE */}
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <img
            src="https://placehold.co/900x600/0B0F16/FFFFFF?text=Project+Screenshot"
            alt="Project Preview"
            className="
              w-full
              h-full
              object-cover
              transition
              duration-500
              hover:scale-105
            "
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-6">

          <span className="text-[13px] font-semibold uppercase tracking-wider text-[var(--primary)]">
            Featured Project
          </span>

          <h2 className="text-4xl font-bold text-white leading-tight">
            E-Commerce Dashboard
          </h2>

          <p className="text-[var(--menu-text)] leading-8">
            A modern full-stack dashboard for managing products,
            orders, customers and analytics with responsive UI
            and secure authentication.
          </p>

          {/* Tech */}
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "Tailwind CSS",
            ].map((item) => (
              <span
                key={item}
                className="
                  px-4
                  py-2
                  rounded-full
                  border border-white/10
                  text-sm
                  text-[var(--menu-text)]
                  hover:border-[var(--primary)]
                  transition
                "
              >
                {item}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">

            <button
              className="
                px-7
                py-3
                rounded-xl
                bg-[var(--primary)]
                text-black
                font-semibold
                hover:scale-105
                transition
              "
            >
              <i className="bi bi-box-arrow-up-right mr-2"></i>

              Live Demo
            </button>

            <button
              className="
                px-7
                py-3
                rounded-xl
                border border-[var(--primary)]
                text-[var(--primary)]
                hover:bg-[var(--primary)]
                hover:text-black
                transition
              "
            >
              <i className="bi bi-github mr-2"></i>

              GitHub
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}