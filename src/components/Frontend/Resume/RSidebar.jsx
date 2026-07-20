export default function RSidebar({ active, setactive }) {
  const Resume = ["Experiences", "Education", "Skills", "About"];
  function handleDownload() {
    const link = document.createElement("a");
    link.href="/Resue.pdf"; 
    link.download = "Ryhan Rafi CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="w-full lg:w-[30%] flex flex-col">
      {/* MAIN CARD */}
      <div className="p-6 rounded-2xl flex flex-col justify-between h-full border border-white/10 bg-[rgba(255,255,255,0.03)] backdrop-blur-xl">
        {/* TOP SECTION */}
        <div className="flex flex-col gap-6">
          {/* TITLE */}
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-white">
              Why <span className="text-[var(--primary)]">Hire Me?</span>
            </h2>

            <p className="text-sm text-[var(--menu-text)] leading-relaxed">
              I build fast, secure and modern web applications that help
              businesses grow.
            </p>
          </div>

          {/* MENU LIST */}
          <div className="flex flex-col gap-3">
            {Resume.map((item) => (
              <div
                key={item}
                onClick={() => setactive(item)}
                className={`
                  p-4 rounded-xl border flex items-center justify-between cursor-pointer transition
                  ${
                    active === item
                      ? "border-[var(--primary)] bg-[rgba(124,255,77,.05)]"
                      : "border-white/10"
                  }
                `}
              >
                {/* LEFT SIDE */}
                <div className="flex items-center gap-3">
                  <i
                    className={`bi bi-briefcase-fill text-xl ${
                      active === item
                        ? "text-[var(--primary)]"
                        : "text-[var(--menu-text)]"
                    }`}
                  ></i>

                  <span
                    className={`font-semibold ${
                      active === item
                        ? "text-[var(--primary)]"
                        : "text-[var(--menu-text)]"
                    }`}
                  >
                    {item}
                  </span>
                </div>

                {/* DOT */}
                <span
                  className={`h-2 w-2 rounded-full ${
                    active === item
                      ? "bg-[var(--primary)] animate-pulse"
                      : "bg-white/20"
                  }`}
                ></span>
              </div>
            ))}
          </div>
        </div>

        {/* DOWNLOAD CV */}
        <div className="mt-10 p-6 rounded-2xl border border-[rgba(124,255,77,.25)] bg-[rgba(124,255,77,.05)] backdrop-blur-xl text-center">
          <div className="flex justify-center mb-4">
            <i className="bi bi-download text-3xl text-[var(--primary)]"></i>
          </div>

          <h3 className="text-white font-semibold text-lg">Download My CV</h3>

          <p className="text-sm text-[var(--menu-text)] mt-2">
            Get my full resume in PDF format.
          </p>

          <button onClick={handleDownload} className="mt-5 px-5 py-2 rounded-xl border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-black transition">
            Download CV <i className="bi bi-download ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
