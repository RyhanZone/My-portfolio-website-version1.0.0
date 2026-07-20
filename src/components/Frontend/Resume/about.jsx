export default function About() {
  return (
    <div className="w-full flex flex-col gap-10">

      {/* HEADER */}
      <div>
        <h2 className="text-4xl font-bold text-white">
          About <span className="text-[var(--primary)]">Me</span>
        </h2>

        <p className="text-[var(--menu-text)] mt-3 text-sm leading-relaxed max-w-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident sint quo atque maiores?
          Harum sequi magnam sed quis consequuntur, voluptas.
        </p>
      </div>

      {/* INFO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <Info label="Name" value="Ryhan Rafi" />
        <Info label="Gender" value="Male" />
        <Info label="Age" value="15 Years Old" />

        <Info label="Status" value="Single 😳" />
        <Info label="City" value="Narsingdi" />
        <Info label="Nationality" value="Bangladeshi" />

        <Info label="Experience" value="3+ Years" />
        <Info label="Full Time" value="Available" />
        <Info label="Freelance" value="Available" />

        <Info label="Phone" value="(+880) 01984559583" />
        <Info label="Email" value="rafirafil90400@gmail.com" />
        <Info label="Languages" value="English, Bangla" />

      </div>
    </div>
  );
}

/* SINGLE INFO CARD */
function Info({ label, value }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.03)] backdrop-blur-xl hover:border-[var(--primary)] transition">

      <span className="text-[var(--primary)] font-semibold text-sm">
        {label}
      </span>

      <span className="text-white text-sm font-medium">
        {value}
      </span>

    </div>
  );
}