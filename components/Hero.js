import { MedicalShield, Arduino, RoboticArm } from "@/assests";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex flex-col justify-around items-center align-middle h-30em lg:mt-5 lg:m-20 h-fit">
      <div className=""></div>

      <div className="absolute z-10 top-0 left-0 h-20 w-24 md:h-32 md:w-40">
        <Image
          className="mx-0 my-95"
          src={MedicalShield}
          alt="MedShield"
        />
      </div>

      <div className="absolute z-10 top-0 right-0 h-20 w-24 md:h-32 md:w-40">
        <Image
          className="mx-0 my-95"
          src={Arduino}
          alt="Arduino"
        />
      </div>

      <div className="absolute z-10 bottom-10 right-0 h-20 w-24 md:h-32 md:w-40">
        <Image
          className="mx-0 my-95"
          src={RoboticArm}
          alt="RoboticArm"
        />
      </div>

      <div className="flex text-white text-5xl md:text-7xl font-bold tracking-{5%} w-{8px} px-23 h-{177px} mx-3 mt-20 translate-y-204 justify-center align-middle text-center">
       
        HACKING HEALTH
      </div>
      <div className="flex bg-[#C086EA] text-white mb-10 mt-20 p-2 rounded-2xl text-xl font-semibold">
        {" "}
        <a href="placeholder-link">Register</a>{" "}
      </div>
      <div className="flex text-white text-xl font-semibold">
        {" "}
        <a href="placeholder-link" >Join <span className=" italic underline">Discord</span></a>{" "}
      </div>
    </div>
  );
};

export default Hero;
