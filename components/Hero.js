import { MedicalShield, Arduino, RoboticArm} from "@/assests";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex flex-col justify-around items-center align-middle pt-5 h-30em p-20">

    <div className=""></div>

    <div className="absolute z-10 top-0 left-0 ">
        <Image
        className="mx-0 my-95"
        src={MedicalShield}
        height={209}
        width={201}
        alt="MedShield"
      />
    </div>

    <div className="absolute z-10 top-0 right-0 ">
    <Image
    className="mx-0 my-95"
    src={Arduino}
    height={139.41}
    width={159.71}
    alt="Arduino"
  />
</div>

<div className="absolute z-10 bottom-10 right-0">
<Image
className="mx-0 my-95"
src={RoboticArm}
height={198.67}
width={198.67}
alt="RoboticArm"
/>
</div>
    



    <div className="flex text-white text-7xl font-bold tracking-{5%} w-{8px} px-23 h-{177px} mx-3 mt-20 translate-y-204 "> CMC HACKATHON</div>
    <div className="flex bg-[#C086EA] text-white mb-10 mt-20 p-2 rounded-2xl text-xl font-semibold"> <a href="placeholder-link">Register</a> </div>
    <div className="flex text-white text-xl font-semibold"> <a href="placeholder-link">Join Discord</a> </div>
    </div>
  )
}

export default Hero