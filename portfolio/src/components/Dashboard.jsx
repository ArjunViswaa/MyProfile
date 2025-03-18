import React from 'react';

function Dashboard() {
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-green-900'>
      <div id="projects-and-Education" className='flex flex-col w-[18vw]'>
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

      <div id="profile-experience-skills" className='flex flex-col w-[40vw] m-5'>
        <div className='flex flex-row  h-[21vh]'>
          <div className='w-[50%] mr-3 rounded-lg bg-[#9353d3] cursor-pointer transition-transform duration-500 hover:!scale-105'></div>
          <div className='w-[50%] bg-[#006fee] rounded-lg cursor-pointer transition-transform duration-500 hover:!scale-105'></div>
        </div>
        <div className='flex h-[35vh] mt-5'>
          <div className='w-full bg-[#18181b] rounded-lg cursor-pointer transition-transform duration-500 hover:!scale-105'></div>
        </div>
        <div className='flex flex-row h-[21vh] mt-5'>
          <div className='w-[50%] mr-3 rounded-lg bg-[#17c964] cursor-pointer transition-transform duration-500 hover:!scale-105'></div>
          <div className='w-[50%] bg-[#f5a524] rounded-lg cursor-pointer transition-transform duration-500 hover:!scale-105'></div>
        </div>
      </div>

      <div id="projects-and-Education" className='flex flex-col w-[15vw]'>
        <div className="bg-[#18181b] text-white pt-6 p-3 rounded-lg flex flex-col items-center h-[45vh]">
          <h2 className="text-2xl font-bold">Connect</h2>
          <div className='flex flex-col mt-5 w-[100%] h-[70%]'>
            <div className='flex flex-row h-[30%]'>
              <div id="gmail" className='h-[100%] w-[45%] bg-white rounded-xl justify-items-center content-center cursor-pointer transition-transform duration-500 hover:!scale-110'>
                <img src='/assets/images/gmail_logo.gif' className='h-[100%] w-[100%] rounded-xl' />
              </div>
              <div id="discord" className='h-[100%] w-[45%] bg-white rounded-xl ml-[10%] justify-items-center content-center cursor-pointer transition-transform duration-500 hover:!scale-110'>
                <img src='/assets/images/discord_logo.gif' className='h-[80%] w-[80%] m-[10%]' />
              </div>
            </div>
            <div className='flex flex-row h-[30%] mt-5'>
              <div id="linkedin" className='h-[100%] w-[45%] bg-white rounded-xl justify-items-center content-center cursor-pointer transition-transform duration-500 hover:!scale-110'>
                <img src='/assets/images/linkedIn_logo.gif' className='h-[80%] w-[80%] m-[5%]' />
              </div>
              <div id="slack" className='h-[100%] w-[45%] bg-white rounded-xl ml-[10%] justify-items-center content-center cursor-pointer transition-transform duration-500 hover:!scale-110'>
                <img src='/assets/images/slack_logo.gif' className='h-[80%] w-[80%] m-[10%]' />
              </div>
            </div>
            <div className='flex flex-row h-[40%] mt-5'>
              <div id="github" className='h-[100%] w-[100%] bg-white rounded-xl justify-items-center content-center cursor-pointer transition-transform duration-500 hover:!scale-110'>
                <img src='/assets/images/github_logo.png' className='h-[100%] w-[100%]' />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#18181b] text-white p-6 rounded-lg flex flex-col items-center mt-5 h-[35vh] cursor-pointer transition-transform duration-500 hover:!scale-105">
          <h2 className="text-2xl font-bold">Education</h2>
          <img src='/assets/images/education.png' className='h-40 w-30' />
          <h2>MS in Computer Science</h2>
          <p className='text-xs'>( 2024 to pursuing )</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;