import React from 'react';

function Contacts() {
  return (
    <div id="contact" className='flex flex-col gap-4 order-3 md:order-3'>
        <div className="bg-[#18181b] text-white pt-6 p-3 rounded-lg flex flex-col items-center h-[45vh]">
          <h2 className="text-2xl font-bold">Connect</h2>
          <div className='flex flex-col mt-5 md:w-[100%] w-[50%] h-[70%]'>
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
          
        </div>
      </div>
  );
}

export default Contacts;