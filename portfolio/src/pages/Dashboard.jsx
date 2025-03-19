import React from 'react';
import ProfileAndEducation from '../components/ProfileAndEducation';
import ExperienceAndSkills from '../components/ExperienceAndSkills';
import Contacts from '../components/Contacts';

function Dashboard() {
  return (
    <div className='z-10 overflow-hidden relative min-h-screen min-w-screen gap-4 flex items-center justify-center p-4 bg-gradient-to-br from-black via-gray-900 to-green-900'>
      <div className='relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-1 max-w-[1024px] md:grid-cols-4'>
        <ProfileAndEducation />

        <ExperienceAndSkills />

        <Contacts />
      </div>
    </div>
  );
}

export default Dashboard;