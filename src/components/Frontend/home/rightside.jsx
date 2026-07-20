import Profilepic from "../../../assets/Ryhan-Rafi.png";

export default function RightSide() {
  return (
    <div
      className="
        w-full 
        lg:w-[55%] 
        pt-10 lg:pt-16 
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-10 lg:gap-16
        lg:h-screen
      "
    >
      {/* IMAGE SECTION */}
      <div
        className="
          relative
          w-[260px] sm:w-[320px] md:w-[380px] lg:w-[400px]
          h-[320px] sm:h-[400px] md:h-[440px] lg:h-[450px]
          group
          animate-[float_5s_ease-in-out_infinite]
          hover:[animation-play-state:paused]
        "
      >
        {/* Background Card */}
        <div
          className="
            absolute
            top-4 lg:top-5
            -left-4 lg:-left-5
            w-full
            h-full
            rounded-3xl
            border border-[var(--primary)]
            bg-[rgba(124,255,77,.05)]
            backdrop-blur-xl
            shadow-[0_0_25px_rgba(124,255,77,.12)]
            transition-all duration-500
            group-hover:top-3
            group-hover:-left-3
          "
        />

        {/* Image */}
        <div
          className="
            relative
            z-10
            w-full h-full
            rounded-3xl
            overflow-hidden
            border border-white/10
            bg-[#111]
          "
        >
          <img
            src={Profilepic}
            alt="Rafi"
            className="
              w-full h-full
              object-cover
              transition-all duration-700
              group-hover:scale-105
            "
          />
        </div>
      </div>

      {/* STATS SECTION */}
      <div
        className="
          w-[95%] sm:w-[90%] lg:w-full
          max-w-[720px]
          rounded-2xl
          border border-[rgba(124,255,77,.15)]
          bg-[rgba(255,255,255,.02)]
          backdrop-blur-xl
          px-4 sm:px-6 lg:px-8
          py-5 lg:py-6
        "
      >
        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
          {/* Available */}
          <div className="flex items-center gap-3 lg:pr-6 lg:border-r border-white/10">
            <i className="bi bi-circle-fill text-[18px] sm:text-[20px] lg:text-[22px] text-[var(--primary)]"></i>

            <div>
              <p className="text-[11px] sm:text-[12px] lg:text-[13px] text-[var(--menu-text)]">
                Available for
              </p>
              <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold text-[var(--primary)]">
                Freelance
              </h3>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 lg:px-6 lg:border-r border-white/10">
            <i className="bi bi-geo-alt-fill text-[18px] sm:text-[20px] lg:text-[22px] text-[var(--primary)]"></i>

            <div>
              <p className="text-[11px] sm:text-[12px] lg:text-[13px] text-[var(--menu-text)]">
                Based in
              </p>
              <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold text-[var(--primary)]">
                Bangladesh
              </h3>
            </div>
          </div>

          {/* Experience */}
          <div className="flex items-center gap-3 lg:px-6 lg:border-r border-white/10">
            <i className="bi bi-lightning-charge-fill text-[18px] sm:text-[20px] lg:text-[22px] text-[var(--primary)]"></i>

            <div>
              <p className="text-[11px] sm:text-[12px] lg:text-[13px] text-[var(--menu-text)]">
                Experience
              </p>
              <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold text-[var(--primary)]">
                3+ Years
              </h3>
            </div>
          </div>

          {/* Coffee */}
          <div className="flex items-center gap-3 lg:pl-6">
            <i className="bi bi-cup-hot-fill text-[18px] sm:text-[20px] lg:text-[22px] text-[var(--primary)]"></i>

            <div>
              <p className="text-[11px] sm:text-[12px] lg:text-[13px] text-[var(--menu-text)]">
                Coffee
              </p>
              <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold text-[var(--primary)]">
                124 Cups
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
