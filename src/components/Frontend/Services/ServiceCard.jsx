import services from "./servicesData";

export default function ServiceCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {services.map((service) => (
        <div
          key={service.id}
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-[rgba(255,255,255,.02)]
            p-8
            transition-all
            duration-500
            hover:border-[var(--primary)]/40
            hover:-translate-y-2
          "
        >
          {/* Big Number */}
          <h2
            className="
              absolute
              top-6
              right-6
              text-7xl
              font-black
              text-white/[0.04]
              transition
              duration-500
              group-hover:text-[var(--primary)]/10
            "
          >
            {service.number}
          </h2>

          {/* Top */}
          <div className="flex justify-between items-start">
            <div
              className="
                h-20
                w-20
                rounded-2xl
                border
                border-white/10
                flex
                items-center
                justify-center
                text-[36px]
                text-[var(--primary)]
                bg-[rgba(124,255,77,.04)]
                transition
                duration-500
                group-hover:rotate-6
                group-hover:scale-110
              "
            >
              <i className={service.icon}></i>
            </div>

            <button
              className="
                h-12
                w-12
                rounded-full
                border
                border-white/10
                flex
                items-center
                justify-center
                text-[var(--primary)]
                transition
                duration-300
                group-hover:bg-[var(--primary)]
                group-hover:text-black
              "
            >
              <i className="bi bi-arrow-up-right"></i>
            </button>
          </div>

          {/* Title */}
          <h3 className="mt-8 text-3xl font-bold text-white">
            {service.title}
          </h3>

          {/* Description */}
          <p className="mt-4 leading-8 text-[var(--menu-text)]">
            {service.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-8">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="
                  px-4
                  py-2
                  rounded-xl
                  text-sm
                  border
                  border-white/10
                  text-[var(--menu-text)]
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom */}
          <button
            className="
              mt-8
              flex
              items-center
              gap-3
              text-[var(--primary)]
              font-semibold
              group/button
            "
          >
            Learn More

            <i
              className="
                bi bi-arrow-right
                transition
                duration-300
                group-hover/button:translate-x-2
              "
            ></i>
          </button>

          {/* Glow */}
          <div
            className="
              absolute
              -top-32
              -right-32
              h-56
              w-56
              rounded-full
              bg-[var(--primary)]
              blur-[120px]
              opacity-0
              transition
              duration-700
              group-hover:opacity-10
            "
          ></div>
        </div>
      ))}
    </div>
  );
}