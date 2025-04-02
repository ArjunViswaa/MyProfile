import React, { useState } from 'react';
import ProfileAndEducation from '../components/ProfileAndEducation';
import ExperienceAndSkills from '../components/ExperienceAndSkills';
import Contacts from '../components/Contacts';

function Dashboard() {
  const [ blackOpacity, setBlackOpacity ] = useState(false);

  return (
    <>
      <div className='z-10 overflow-hidden relative min-h-screen min-w-screen gap-4 flex items-center justify-center p-4 bg-gradient-to-br from-black via-gray-900 to-green-900'>
        <div className='relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-1 max-w-[1024px] md:grid-cols-4'>
          <ProfileAndEducation bgScreenSet={setBlackOpacity} />

          <ExperienceAndSkills bgScreenSet={setBlackOpacity} />

          <Contacts bgScreenSet={setBlackOpacity} />
        </div>
      </div>
      {blackOpacity && <div className='bg-black w-[100vw] h-[100vh] z-100 absolute top-0 opacity-80' onClick={() => setBlackOpacity(false)}></div>}
    </>
  );
}

export default Dashboard;