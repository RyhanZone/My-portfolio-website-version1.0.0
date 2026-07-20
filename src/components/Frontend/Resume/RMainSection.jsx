import Expareances from "./Expareances";
import Education from "./Education";
import Skills from "./Skills";
import About from "./about";
export default function RMainSection({ active }) {
  return (
    <div className="lg:w-[70%] h-screen w-full flex flex-col gap-6 p-3">
      {active === "Experiences" && <Expareances />}
      {active === "Education" && <Education />}
      {active === "Skills" && <Skills />}
      {active === "About" && <About />}
    </div>
  )
}
