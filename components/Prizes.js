const Prizes = () => {
  return (
    <div className="flex flex-col justify-center items-center align-middle">
      <h1 className=" font-semibold font-sans text-4xl text-white py-5">Prizes</h1>
      <div className="flex flex-wrap justify-center items-center">
        <div className=" h-72 w-64 mx-5 my-5 bg-[#212631] outline-2 rounded-xl flex justify-center items-center text-white">
          1st
        </div>
        <div className=" h-72 w-64 mx-5 my-5 bg-[#212631] outline-2 rounded-xl flex justify-center items-center text-white">
          2nd
        </div>
        <div className=" h-72 w-64 mx-5 my-5 bg-[#212631] outline-2 rounded-xl flex justify-center items-center text-white">
          3rd
        </div>
      </div>
    </div>
  );
};

export default Prizes;
