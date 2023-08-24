import { Rtist, CMCPAC } from "@/assests";
import Image from "next/image";

const Organizers = () => {
  return (
    <div className="flex flex-col justify-around items-center align-middle pt-5">
    <h1 className=" font-semibold font-sans text-4xl text-white">Organizers</h1>
      <div className="flex flex-wrap items-center align-middle justify-around">
        <Image
          className="mx-20 my-10"
          src={Rtist}
          height={250}
          width={250}
          alt="Rtist"
        />
        <Image
          className="mx-20 my-10"
          src={CMCPAC}
          height={250}
          width={250}
          alt="CMCPAC"
        />
      </div>
    </div>
  );
};

export default Organizers;
