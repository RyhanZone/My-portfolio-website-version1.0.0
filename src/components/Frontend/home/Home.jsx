import Leftside from "./leftside";
import Rightside from "./rightside";

export default function Home() {
  return (
    <div
      id="home"
      className="
        max-w-[var(--max-width)]
        mx-auto

        flex flex-col-reverse lg:flex-row

        justify-between
        items-center lg:items-start

        gap-10 lg:gap-0

        px-6 sm:px-8 lg:px-10

        min-h-screen

        py-24 lg:py-20
      "
    >
      <Leftside />
      <Rightside />
    </div>
  );
}
