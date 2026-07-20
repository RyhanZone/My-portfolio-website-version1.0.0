import ServicesHeader from "./ServicesHeader";
import ServiceCard from "./ServiceCard";
import WhyChooseMe from "./WhyChooseMe";
import CTASection from "./CTASection";

export default function Services() {
  return (
    <section id="services" className="bg-[#090F16] py-24">
      <div className="max-w-[var(--max-width)] mx-auto px-6">

        <ServicesHeader />

        <ServiceCard />

        <WhyChooseMe />

        <CTASection />

      </div>
    </section>
  );
}