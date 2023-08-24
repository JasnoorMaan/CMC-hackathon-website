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
} from "@/components";

export default function Home() {
  return (
    <div className=" relative  bg-[#1E1E1E]">
      <Image
        src={Glow}
        width={400}
        height={400}
        className="absolute top-10 md:left-1/3 z-0 overflow-hidden"
      />
      <div className="z-10 relative">
      <Navbar />
      <Hero />
      <About />
      <Prize  />
      <Timeline />
      <Sponsors />
      <FAQ />
      <Organizers />
      </div>
    </div>
  );
}
