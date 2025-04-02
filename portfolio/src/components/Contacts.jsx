import React from 'react';

function Contacts({ bgScreenSet }) {
  const contactsList = {
    gmail: 'mailto:arjunviswaa@gmail.com',
    discord: 'https://discord.gg/SDxTf7Hu',
    linkedin: 'https://www.linkedin.com/in/arjun-viswanath-88b963167/',
    slack: 'https://join.slack.com/t/digital-retail-talk/shared_invite/zt-32r6d4e8n-1Fq~g5YN285YFRoDGflqvg',
    github: 'https://github.com/ArjunViswaa'
  }
  const onSelectContact = (contact) => {
    window.open(contactsList[contact])
  }

  return (
    <div id="contact" className='flex flex-col gap-4 order-3 md:order-3'>
        <div className="bg-[#18181b] text-white pt-6 p-3 rounded-lg flex flex-col items-center h-[45vh]">
          <h2 className="text-xl font-bold">Connect</h2>
          <div className='flex flex-col mt-5 md:w-[100%] w-[50%] h-[70%]'>
            <div className='flex flex-row h-[30%]'>
              <div id="gmail" onClick={() => onSelectContact('gmail')} className='h-[100%] w-[45%] bg-white rounded-xl justify-items-center content-center cursor-pointer transition-transform duration-500 hover:!scale-110'>
                <img src='/assets/images/gmail_logo.gif' className='h-[100%] w-[100%] rounded-xl' />
              </div>
              <div id="discord" onClick={() => onSelectContact('discord')} className='h-[100%] w-[45%] bg-white rounded-xl ml-[10%] justify-items-center content-center cursor-pointer transition-transform duration-500 hover:!scale-110'>
                <img src='/assets/images/discord_logo.gif' className='h-[80%] w-[80%] m-[10%]' />
              </div>
            </div>
            <div className='flex flex-row h-[30%] mt-5'>
              <div id="linkedin" onClick={() => onSelectContact('linkedin')} className='h-[100%] w-[45%] bg-white rounded-xl justify-items-center content-center cursor-pointer transition-transform duration-500 hover:!scale-110'>
                <img src='/assets/images/linkedIn_logo.gif' className='h-[80%] w-[80%] m-[5%]' />
              </div>
              <div id="slack"  onClick={() => onSelectContact('slack')}className='h-[100%] w-[45%] bg-white rounded-xl ml-[10%] justify-items-center content-center cursor-pointer transition-transform duration-500 hover:!scale-110'>
                <img src='/assets/images/slack_logo.gif' className='h-[80%] w-[80%] m-[10%]' />
              </div>
            </div>
            <div className='flex flex-row h-[40%] mt-5'>
              <div id="github" onClick={() => onSelectContact('github')} className='h-[100%] w-[100%] bg-white rounded-xl justify-items-center content-center cursor-pointer transition-transform duration-500 hover:!scale-110'>
                <img src='/assets/images/github_logo.png' className='h-[100%] w-[100%]' />
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => bgScreenSet(true)} className="bg-[#18181b] text-white p-6 rounded-lg flex flex-col items-center mt-5 h-[35vh] cursor-pointer transition-transform duration-500 hover:!scale-105">
          
        </div>
      </div>
  );
}

export default Contacts;