const About = () => {
  return (
    <div className="flex flex-col w-4/5 mx-[10%] blurBlackground rounded-3xl justify-center items-center pt-8 pb-8">
      <h1 className=" font-bold font-sans text-4xl text-white">About</h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col text-[#D4D0D3] wrap pt-12 pb-12 pl-12 pr-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            magna sem. Nullam scelerisque commodo erat. Praesent ac volutpat
            sapien, sed finibus arcu. Etiam venenatis imperdiet augue eget
            rutrum. Donec eu nunc eu neque commodo iaculis vel sed mi. Proin non
            condimentum purus. Suspendisse egestas lacinia erat, id fermentum
            quam scelerisque et. Phasellus dapibus nec enim id pulvinar. Nulla
            luctus nec diam ut pharetra. Nullam blandit imperdiet venenatis. In
            scelerisque nisl erat, vel luctus ex porta et. Nullam malesuada odio
            quis elit scelerisque elementum. Nunc ornare cursus vulputate.
            Nullam blandit imperdiet venenatis. In scelerisque nisl erat, vel luctus ex porta et. Nullam malesuada odio
            quis elit scelerisque elementum. Nunc ornare cursus vulputate.
          </p>

        </div>
        <div className="flex items-center align-middle justify-center flex-col">
          <div className=" w-96 mx-10 my-8 h-36 pl-4 bg-[#212631] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
