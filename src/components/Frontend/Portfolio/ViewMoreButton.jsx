export default function ViewMoreButton() {
  return (
    <div className="flex justify-center pt-4">
      <button
        className="
          group
          flex
          items-center
          gap-3
          px-8
          py-4
          rounded-2xl
          border
          border-[var(--primary)]
          bg-[rgba(124,255,77,.05)]
          text-[var(--primary)]
          font-semibold
          transition-all
          duration-300
          hover:bg-[var(--primary)]
          hover:text-black
          hover:shadow-[0_0_30px_rgba(124,255,77,.25)]
        "
      >
        View All Projects
        <i
          className="
            bi bi-arrow-right
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        ></i>
      </button>
    </div>
  );
}
