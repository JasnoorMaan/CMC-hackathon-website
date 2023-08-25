

const Timeline=()=>{
    return(
        <div id='schedule' className='flex w-full flex-col justify-center items-center '>
        <h1 className=" font-semibold font-sans text-4xl text-white pt-10">Timeline</h1>
            <div className='flex flex-col md:w-1/2 gap-2 py-10 justify-center items-center bg-lightblue'>
                <div className='flex flex-col bg-[#212631] text-white shadow-3xl font-medium w-11/12 sm:w-9/12  border-black border-[2px] rounded-[12px]'>
                    <div className='flex justify-between  px-[10px] py-[20px]  border-b-black border-b-[2px]'><div>10:00 am</div><div>Hackathon registration starts</div></div>
                    <div className='flex justify-between  px-[10px] py-[20px]  border-b-black border-b-[2px]'><div>10:00 am</div><div>Hackathon registration starts</div></div>
                    <div className='flex justify-between  px-[10px] py-[20px]  border-b-black border-b-[2px]'><div>10:00 am</div><div>Hackathon registration starts</div></div>
                    <div className='flex justify-between  px-[10px] py-[20px]  border-b-black border-b-[2px]'><div>10:00 am</div><div>Hackathon registration starts</div></div>
                    <div className='flex justify-between  px-[10px] py-[20px]  border-b-black border-b-[2px]'><div>10:00 am</div><div>Hackathon     registration starts</div></div>
                    <div className='flex justify-between  px-[10px] py-[20px]'><div>10:00 am</div><div>Hackathon     registration starts</div></div>
                </div>
            </div>
            
        </div>
    )
}

export default Timeline;