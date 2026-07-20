export default function ServicesHeader() {
  return (
    <div className="mb-16 flex flex-col items-center text-center">
      {/* Small Tag */}
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-14 bg-[var(--primary)]/40"></span>

        <span className="text-xs font-semibold tracking-[6px] uppercase text-[var(--primary)]">
          Services
        </span>

        <span className="h-px w-14 bg-[var(--primary)]/40"></span>
      </div>

      {/* Heading */}
      <h2 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
        What I Can Do{" "}
        <span className="text-[var(--primary)]">For You</span>
      </h2>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--menu-text)]">
        I help businesses and individuals transform ideas into modern,
        high-performance web applications using the latest technologies and
        clean development practices.
      </p>
    </div>
  );
}