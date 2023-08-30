'use client'
import React, { useState } from "react";

let qa = [
    {
        ques: " Demo Question 1",
        ans: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et adipiscing elit Ut et massa mi. Aliquam in hendrerit urna."
    },
    {
        ques: "This is question 2 ",
        ans: " demo answer 2"
    },
    {
        ques: "This is question 3",
        ans: "This is answer 3"
    },
    {
        ques: "This is question 4",
        ans: "This is answer 4"
    },
    {
        ques: "This is question 5",
        ans: "This is answer 5"
    }
]

let FAQ = function () {
    const [index, setIndex] = useState(() => {
        return 0;
    })

    let FAQPositionerIncrease = () => {
        if (index == qa.length - 1) {
            setIndex(0);
        }
        else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    let FAQPositionerDecrease = () => {
        if (index == 0) {
            setIndex(qa.length - 1);
        }
        else {
            setIndex(prevIndex => prevIndex - 1)
        }
    }
    return (
        <div className="flex flex-col justify-center items-center FAQbackground py-10 md:py-20 ">
            <h1 className="text-white text-2xl md:text-4xl font-bold items-center pb-4 text-center ">FAQs</h1>
            <div className="h-[332px] mb-10 p-6 md:h-80 md:px-10 md:pt-10 md:pb-16 sm:w-8/12 flex flex-col justify-items-center items-center">
                <h2 className="p-4 text-2xl text-center text-white"><b>{qa[index].ques}</b></h2>
                <h3 className="text-center self-start text-lg text-white">{qa[index].ans}</h3>
            </div>
            <div className="w-[60%] h-4 relative">
                <div className="w-[98px] h-[60px] absolute -top-6 left-[50%] -translate-x-[50%] rounded-full flex justify-center gap-3  items-center borde">
                    <button onClick={() => { FAQPositionerDecrease() }}>
                        <svg className="h-[25px] w-[25px] hover:mr-2" width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 13L23 0.00961876V25.9904L0.5 13Z" fill="#FFFFFF" />
                        </svg>

                    </button>
                    <button className="h-[25px] w-[25px]  hover:ml-2" onClick={() => { FAQPositionerIncrease() }}><svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.5 13L0 25.9904L0 0.00961876L22.5 13Z" fill="#FFFFFF" />
                    </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FAQ