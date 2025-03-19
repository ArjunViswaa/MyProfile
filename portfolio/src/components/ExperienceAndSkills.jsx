import React from "react";

function ExperienceAndSkills() {
    return (
        <div id="profile-experience-skills" className='flex flex-col w-[40vw] m-5'>
            <div className='flex flex-row  h-[21vh]'>
                <div className='w-[50%] mr-3 rounded-lg bg-[#9353d3] cursor-pointer transition-transform duration-500 hover:!scale-105'>
                    <h6 className="text-lg font-bold text-white mt-[10%] ml-[5%] italic">Personal Info</h6>
                    <h5 className="text-2xl font-bold text-white mt-[7%] ml-[5%]">Arjun S Viswanath</h5>
                </div>
                <div className='w-[50%] bg-[#006fee] rounded-lg cursor-pointer transition-transform duration-500 hover:!scale-105'>
                    <h6 className="text-lg font-bold text-white mt-[10%] ml-[5%] italic">Job Title</h6>
                    <h5 className="text-2xl font-bold text-white mt-[7%] ml-[5%]">Software Associate - Projects</h5>
                </div>
            </div>
            <div className='flex h-[35vh] mt-5'>
                <div className='w-full bg-[#18181b] rounded-lg cursor-pointer transition-transform duration-500 hover:!scale-105'></div>
            </div>
            <div className='flex flex-row h-[21vh] mt-5'>
                <div className='w-[50%] mr-3 rounded-lg bg-[#17c964] cursor-pointer transition-transform duration-500 hover:!scale-105'>
                    <h6 className="text-lg font-bold text-white mt-[10%] ml-[5%] italic">Experience</h6>
                    <div className="flex flex-row w-full items-center justify-center flex-1 mt-5">
                        <h1 className="font-mont font-bold text-4xl md:text-5xl lg:text-6xl ">6 </h1>
                        <h5 className="font-mont font-bold text-lg md:text-xl lg:text-2xl ">y</h5>
                    </div>
                </div>
                <div className='w-[50%] bg-[#f5a524] rounded-lg cursor-pointer transition-transform duration-500 hover:!scale-105'>
                    <h6 className="text-lg font-bold text-white mt-[10%] ml-[5%] italic">Skills Accumulated</h6>
                    <div className="flex flex-row w-full items-center justify-center flex-1 mt-5">
                        <h1 className="font-mont font-bold text-4xl md:text-5xl lg:text-6xl ">12</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceAndSkills;