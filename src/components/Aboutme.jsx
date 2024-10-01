import next from "../assets/nextjs.png"
import react from "../assets/react.png"
import express from "../assets/express.png"
import javas from "../assets/javascript.png"
import node from "../assets/node.png"
import tailwind from "../assets/tailwind.png"
export function Aboutme(){
    return (
        <div id="about" className="flex flex-col gap-[2rem] lg:gap-[5rem] items-center bg-[#ffffff] w-full px-[2rem] lg:px-[6rem] py-[5rem]">
        <div className="text-3xl lg:text-4xl font-bold">
            Skills
        </div>
        <div className="flex gap-[1rem] lg:gap-[4rem] justify-center items-center">
            <div className="w-[5rem] lg:w-[8rem]">
                <img src={next} alt="Next.js Logo" />
            </div>
            <div className="w-[5rem] lg:w-[8rem]">
                <img src={react} alt="React Logo" />
            </div>
            <div className="w-[5rem] lg:w-[8rem]">
                <img src={express} alt="Express Logo" />
            </div>
            <div className="w-[5rem] lg:w-[8rem]">
                <img src={javas} alt="JavaScript Logo" />
            </div>
            <div className="w-[5rem] lg:w-[8rem]">
                <img src={node} alt="Node.js Logo" />
            </div>
            <div className="w-[5rem] lg:w-[8rem]">
                <img src={tailwind} alt="Tailwind CSS Logo" />
            </div>
        </div>
    </div>
    )
}