import { MedicalShield, Arduino, RoboticArm } from "@/assests";
import Image from "next/image";

const Hero = () => {
  return (
    <>
    <div className="relative flex flex-col justify-around items-center align-middle lg:mt-5 lg:m-20 h-fit">
      <div className="absolute z-10 top-0 left-0 h-20 w-24 md:h-32 md:w-40">
        <Image className="mx-0 my-95" src={MedicalShield} alt="MedShield" />
      </div>

      <div className="absolute z-10 top-0 right-0 h-20 w-24 md:h-32 md:w-40">
        <Image className="mx-0 my-95" src={Arduino} alt="Arduino" />
      </div>

      <div className="absolute z-10 bottom-10 right-0 h-20 w-24 hidden md:block">
        <Image className="mx-0 my-95" src={RoboticArm} alt="RoboticArm" />
      </div>

      <div className="flex text-white text-4xl md:text-7xl font-bold px-23 mx-3 mt-40 translate-y-204 justify-center align-middle text-center">
        HACKING HEALTH
      </div>
      <div className="flex text-white text-xl md:text-3xl font-normal px-23 mx-3 mt-7 translate-y-204 justify-center align-middle text-center">
        Code a Better Future at Hacking Health!
      </div>

      </div>
      <div className="flex flex-wrap mb-40 mt-40 text-base align-middle justify-evenly">
        
        <div className=" text-white rounded-xl font-semibold align-middle justify-center py-3 px-6 bg-[#C086EA] hover:bg-blue-600 transition duration-300">
        <a
          href="Devfolio-link"
        >
          Register at DevFolio
        </a>
        </div>
        
        <div className=" text-white rounded-xl font-semibold align-middle justify-center py-3 px-6 bg-[#C086EA] hover:bg-blue-600 transition duration-300">
        <a
          href="Devfolio-link"
        >
          Join Discord
        </a>
        </div>
        </div>
      </>
  );
};

export default Hero;
