import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Tools } from "@/components/sections/tools";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <Tools />
        <Services />
        <WhyUs />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
