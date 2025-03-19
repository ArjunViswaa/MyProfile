import React from 'react';
import ProfileAndEducation from '../components/ProfileAndEducation';
import ExperienceAndSkills from '../components/ExperienceAndSkills';
import Contacts from '../components/Contacts';

function Dashboard() {
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-green-900'>
      <ProfileAndEducation />

      <ExperienceAndSkills />

      <Contacts />
    </div>
  );
}

export default Dashboard;