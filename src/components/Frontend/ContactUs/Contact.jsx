export default function Contact() {
  return (
    <section className="py-24 bg-[var(--resume-bg)]">
      <div className="max-w-[var(--max-width)] mx-auto px-6">
        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let's work <span className="text-[var(--primary)]">together!</span>
          </h2>

          <p className="text-[var(--menu-text)] mt-3 max-w-xl">
            Have a project in mind? Let's discuss your ideas and create
            something amazing together.
          </p>
        </div>

        {/* CONTACT WRAPPER */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[300px_1fr]
            gap-8
          "
        >
          {/* LEFT SIDE */}
          <div
            className="
              p-8
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
            "
          >
            <h3 className="text-xl font-semibold text-white">More details</h3>

            <p
              className="
                text-sm
                text-[var(--menu-text)]
                mt-3
                leading-6
              "
            >
              Feel free to contact me for web development, collaboration or any
              project discussion.
            </p>

            <div className="mt-6 space-y-5">
              <div className="flex items-center gap-4">
                <i className="bi bi-envelope text-xl text-[var(--primary)]"></i>

                <span className="text-[var(--menu-text)] text-sm">
                  rafirafi190400@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <i className="bi bi-telephone text-xl text-[var(--primary)]"></i>

                <span className="text-[var(--menu-text)] text-sm">
                  +880 1984559583
                </span>
              </div>

              <div className="flex items-center gap-4">
                <i className="bi bi-geo-alt text-xl text-[var(--primary)]"></i>

                <span className="text-[var(--menu-text)] text-sm">
                  Narsingdi, Bangladesh
                </span>
              </div>
            </div>

            <div className="h-px bg-white/10 my-8"></div>

            <h3 className="text-xl font-semibold text-white">Follow my work</h3>

            <p className="text-sm text-[var(--menu-text)] mt-3">
              Check my latest projects and updates.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/RyhanZone"
                className="
                  h-11
                  w-11
                  rounded-full
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-[var(--menu-text)]
                  hover:text-[var(--primary)]
                  hover:border-[var(--primary)]
                  transition
                "
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/ryhan-rafi-329024346/"
                className="
                  h-11
                  w-11
                  rounded-full
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-[var(--menu-text)]
                  hover:text-[var(--primary)]
                  hover:border-[var(--primary)]
                  transition
                "
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="https://www.facebook.com/ryhan.rafi.974546"
                className="
                  h-11
                  w-11
                  rounded-full
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-[var(--menu-text)]
                  hover:text-[var(--primary)]
                  hover:border-[var(--primary)]
                  transition
                "
              >
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>

          {/* FORM SIDE */}
          <div
            className="
              p-8
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
            "
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Full name"
                className="
                  w-full
                  px-5
                  py-4
                  rounded-xl
                  bg-white/[0.04]
                  border
                  border-white/10
                  text-white
                  placeholder:text-gray-500
                  outline-none
                  focus:border-[var(--primary)]
                  transition
                "
              />

              <input
                type="email"
                placeholder="Email address"
                className="
                  w-full
                  px-5
                  py-4
                  rounded-xl
                  bg-white/[0.04]
                  border
                  border-white/10
                  text-white
                  placeholder:text-gray-500
                  outline-none
                  focus:border-[var(--primary)]
                  transition
                "
              />

              <input
                type="text"
                placeholder="Phone number"
                className="
                  w-full
                  px-5
                  py-4
                  rounded-xl
                  bg-white/[0.04]
                  border
                  border-white/10
                  text-white
                  placeholder:text-gray-500
                  outline-none
                  focus:border-[var(--primary)]
                  transition
                "
              />

              <input
                type="text"
                placeholder="Subject"
                className="
                  w-full
                  px-5
                  py-4
                  rounded-xl
                  bg-white/[0.04]
                  border
                  border-white/10
                  text-white
                  placeholder:text-gray-500
                  outline-none
                  focus:border-[var(--primary)]
                  transition
                "
              />

              <textarea
                rows="6"
                placeholder="Tell me more about your project..."
                className="
                  md:col-span-2
                  w-full
                  px-5
                  py-4
                  rounded-xl
                  bg-white/[0.04]
                  border
                  border-white/10
                  text-white
                  placeholder:text-gray-500
                  outline-none
                  focus:border-[var(--primary)]
                  transition
                  resize-none
                "
              ></textarea>

              <button
                className="
                  md:col-span-2
                  py-4
                  rounded-xl
                  bg-[var(--primary)]
                  text-black
                  font-semibold
                  hover:scale-[1.02]
                  transition
                  cursor-pointer
                "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
