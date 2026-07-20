const features = [
  {
    icon: "bi bi-lightning-charge",
    title: "Fast Delivery",
    value: "100%",
    desc: "On-time delivery for every project.",
  },
  {
    icon: "bi bi-shield-check",
    title: "Clean & Secure",
    value: "100%",
    desc: "Structured, scalable and secure code.",
  },
  {
    icon: "bi bi-phone",
    title: "Responsive",
    value: "100%",
    desc: "Perfect on desktop, tablet & mobile.",
  },
  {
    icon: "bi bi-headset",
    title: "Response Time",
    value:"<24",
    desc: "Most messages are replied to within one business day.",
  },
];

export default function WhyChooseMe() {
  return (
    <div className="mt-16 rounded-3xl border border-white/10 bg-[rgba(255,255,255,.02)] backdrop-blur-xl overflow-hidden">
      <div className="grid lg:grid-cols-[1.2fr_3fr]">

        {/* LEFT */}

        <div className="p-8 border-b lg:border-b-0 lg:border-r border-white/10">
          <span className="text-xs uppercase tracking-[4px] text-[var(--primary)]">
            Why Choose Me
          </span>

          <h3 className="mt-4 text-3xl font-bold text-white leading-tight">
            I Focus On Quality &
            <span className="text-[var(--primary)]"> Client Satisfaction</span>
          </h3>

          <p className="mt-5 text-[var(--menu-text)] leading-8">
            Every project is built with clean architecture, optimized
            performance and modern UI. I don't just write code — I build
            products that users enjoy.
          </p>

          <div className="mt-8 text-[var(--primary)] text-2xl italic">
            — Ryhan Rafi
          </div>
        </div>

        {/* RIGHT */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => (
            <div
              key={item.title}
              className="
                group
                p-8
                border-b
                sm:border-r
                border-white/10
                transition
                duration-300
                hover:bg-[rgba(124,255,77,.03)]
              "
            >
              <div
                className="
                  h-16
                  w-16
                  rounded-full
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-3xl
                  text-[var(--primary)]
                  transition
                  duration-300
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                <i className={item.icon}></i>
              </div>

              <h4 className="mt-6 text-lg font-semibold text-white">
                {item.title}
              </h4>

              <div className="mt-3 text-4xl font-bold text-[var(--primary)]">
                {item.value}
              </div>

              <p className="mt-4 text-sm leading-7 text-[var(--menu-text)]">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}