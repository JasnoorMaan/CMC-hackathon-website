import Image from "next/image";
import { Glow } from "@/assests";
import {
  Navbar,
  Prize,
  Organizers,
  Timeline,
  FAQ,
  About,
  Hero,
  Sponsors,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="relative bg-[#1E1E1E]">
      <Image
        src={Glow}
        width={600}
        height={600}
        className="absolute top-[18%] md:left-[40%] z-0 overflow-hidden rotate-180"
      />
      <Image
        src={Glow}
        width={500}
        height={500}
        className="absolute top-[23%] -left-10 z-0 overflow-hidden rotate-90"
      />
      <Image
        src={Glow}
        width={500}
        height={500}
        className="absolute top-[58%] -left-10 z-0 overflow-hidden rotate-90"
      />
      <Image
        src={Glow}
        width={600}
        height={600}
        className="absolute top-[48%] right-0 z-0 overflow-hidden -rotate-90"
      />
      <Image
        src={Glow}
        width={400}
        height={400}
        className="absolute top-[85%] right-0 md:right-[30%] lg:right-[40%] z-0 overflow-hidden "
      />
      <div className="z-10 relative">
        <Navbar />
        <Hero />
        <About />
        <Prize />
        <Timeline />
        <Sponsors />
        <FAQ />
        <Organizers />
        <Footer />
      </div>
    </div>
  );
}
