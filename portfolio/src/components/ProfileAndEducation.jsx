import React from "react";

function ProfileAndEducation() {
    return (
        <div id="projects-and-Education" className='flex flex-col gap-4 order-2 md:order-1'>
            <div className="bg-[#18181b] text-white p-6 rounded-lg flex flex-col items-center h-[45vh] cursor-pointer transition-transform duration-500 hover:!scale-105">
                <h2 className="text-2xl font-bold">Project Studio</h2>
                <div className="w-40 h-40 flex items-center justify-center rounded-full border-25 border-green-400 mt-4">
                    <span className="text-2xl text-blue-400">100%</span>
                </div>
                <p className="text-3xl font-bold mt-7">10+</p>
                <p className="text-gray-400">Completed 10+ Projects</p>
            </div>
            <div className="bg-[#18181b] text-white p-6 rounded-lg flex flex-col items-center mt-5 h-[35vh] cursor-pointer transition-transform duration-500 hover:!scale-105">
                <h2 className="text-2xl font-bold">Education</h2>
                <img src='/assets/images/education.png' className='h-40 w-40' />
                <h2>MS in Computer Science</h2>
                <p className='text-xs'>( 2024 to pursuing )</p>
            </div>
        </div>
    );
}

export default ProfileAndEducation;