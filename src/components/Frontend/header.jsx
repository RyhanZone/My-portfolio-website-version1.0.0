import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // MUNUES ARRAY
  const links = ["Home", "Resume", "Portfolio", "Services", "Contact"];

  // SCROLL ANIMATION
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <header
      className={`
      fixed top-0 left-0 w-full z-50
      transition-all duration-300
      ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl py-3 border-b border-white/10"
          : "bg-transparent py-5"
      }
    `}
    >
      <div className="max-w-[var(--max-width)] mx-auto flex justify-between items-center px-6">
        {/* LOGO */}
        <h1 className="text-3xl font-extrabold text-[var(--primary)] tracking-widest">
          Rafi<span className="text-white">.</span>
        </h1>
        <ul className="hidden md:flex gap-10 text-sm text-[var(--menu-text)]">
          {links.map((item) => (
            <li
              key={item}
              onClick={() => {
                setActive(item);
                scrollToSection(item.toLowerCase());
              }}
              className="relative cursor-pointer group transition"
            >
              <span
                className={`
                transition
                ${active === item ? "text-[var(--primary)]" : ""}
                group-hover:text-[var(--primary)]
              `}
              >
                {item}
              </span>

              {/* ACTIVE DOT */}
              {active === item && (
                <span className="absolute left-1/2 -bottom-2 w-1.5 h-1.5 bg-[var(--primary)] rounded-full -translate-x-1/2 shadow-[0_0_10px_var(--primary)]"></span>
              )}

              {/* GLOW HOVER */}
              <span className="absolute left-1/2 -bottom-2 w-8 h-8 bg-[var(--primary)] blur-md opacity-0 group-hover:opacity-20 -translate-x-1/2 transition"></span>
            </li>
          ))}
        </ul>
        <button
          onClick={()=>{scrollToSection('contact')}}
          className="
            hidden md:block
            mt-auto px-5 py-3 rounded-xl
            border border-[var(--primary)]
            text-[var(--primary)]
            hover:bg-[var(--primary)]
            hover:text-black
            hover:cursor-pointer
            transition
          "
        >
          Hire Me
        </button>
        <Menu
          onClick={() => setOpen(true)}
          className="md:hidden text-[var(--primary)] cursor-pointer"
        />
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
        fixed top-0 left-0 h-screen w-full
        bg-black/70 backdrop-blur-xl
        transition-all duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
        onClick={() => setOpen(false)}
      >
        <div
          className={`
            md:hidden absolute top-0 left-0 h-full w-[80%]
            bg-[rgba(9,9,11,0.95)]
            border-r border-white/10
            p-6 flex flex-col
            transform transition-transform duration-300
            ${open ? "translate-x-0" : "-translate-x-full"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-2xl font-bold text-[var(--primary)]">Rafi.</h1>

            <X
              onClick={() => setOpen(false)}
              className="text-[var(--primary)] cursor-pointer hover:rotate-90 transition"
            />
          </div>
          <ul className="flex flex-col gap-6 text-lg text-[var(--menu-text)]">
            {links.map((item) => (
              <li
                key={item}
                onClick={() => {
                  setActive(item);
                  setOpen(false);
                  scrollToSection(item);
                }}
                className="relative cursor-pointer group w-fit"
              >
                <span className="group-hover:text-[var(--primary)] transition">
                  {item}
                </span>

                {/* DOT */}
                <span className="absolute left-0 -bottom-2 w-2 h-2 bg-[var(--primary)] rounded-full opacity-0 group-hover:opacity-100 transition"></span>
              </li>
            ))}
          </ul>
          <button
            onClick={ () => {
              setOpen(false);
              scrollToSection('contact');
            }}
            className="
            mt-auto px-5 py-3 rounded-xl
            border border-[var(--primary)]
            text-[var(--primary)]
            hover:bg-[var(--primary)]
            hover:text-black
            transition
          "
          >
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
}
