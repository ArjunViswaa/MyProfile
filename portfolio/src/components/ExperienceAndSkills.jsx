import React from "react";

function ExperienceAndSkills({ bgScreenSet }) {
    return (
        <div id="profile-experience-skills" className='flex flex-col gap-4 md:col-span-2 order-1 md:order-2'>
            <div className='flex flex-row gap-2 flex-1 max-h-[25vh]'>
                <div onClick={() => bgScreenSet(true)} className='w-[50%] mr-3 rounded-lg bg-[#9353d3] cursor-pointer transition-transform duration-500 hover:!scale-105'>
                    <h6 className="text-lg font-bold text-white mt-[10%] ml-[5%] italic">Personal Info</h6>
                    <h5 className="text-xl font-bold text-white m-[5%]">Arjun S Viswanath</h5>
                </div>
                <div className='w-[50%] bg-[#006fee] rounded-lg cursor-pointer transition-transform duration-500 hover:!scale-105'>
                    <h6 className="text-lg font-bold text-white mt-[10%] ml-[5%] italic mb-[5%]">Job Title</h6>
                    <h5 className="text-xl font-bold text-white m-[5%]">Software Dev Associate</h5>
                </div>
            </div>
            <div className='relative flex flex-col items-center bg-[#18181b] rounded-xl justify-end h-[40vh] w-full cursor-pointer md:flex-1 transition-transform duration-500 hover:!scale-105'>
                <img src="/assets/images/me_suit4.png" className="sm:w-[60%] w-[70%] h-[115%]"/>
            </div>
            <div className='flex flex-row gap-2 flex-1 max-h-[20vh]'>
                <div onClick={() => bgScreenSet(true)} className='w-[50%] mr-3 rounded-lg bg-[#17c964] cursor-pointer transition-transform duration-500 hover:!scale-105'>
                    <h6 className="text-lg font-bold text-white mt-[10%] ml-[5%] italic">Experience</h6>
                    <div className="flex flex-row w-full items-center justify-center flex-1 mt-2 mb-5">
                        <h1 className="font-mont font-bold text-4xl md:text-5xl lg:text-6xl ">6 </h1>
                        <h5 className="font-mont font-bold text-lg md:text-xl lg:text-2xl ">y</h5>
                    </div>
                </div>
                <div onClick={() => bgScreenSet(true)} className='w-[50%] bg-[#f5a524] rounded-lg cursor-pointer transition-transform duration-500 hover:!scale-105'>
                    <h6 className="text-lg font-bold text-white mt-[10%] ml-[5%] italic">Skills Accumulated</h6>
                    <div className="flex flex-row w-full items-center justify-center flex-1 mt-2 mb-5">
                        <h1 className="font-mont font-bold text-4xl md:text-5xl lg:text-6xl ">12</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceAndSkills;