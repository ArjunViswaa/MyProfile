import React, { use, useState } from 'react';
import ProfileAndEducation from '../components/ProfileAndEducation';
import ExperienceAndSkills from '../components/ExperienceAndSkills';
import Contacts from '../components/Contacts';
import EducationDetails from '../components/EducationDetails';
import ProjectDetails from '../components/ProjectDetails';
import PersonalDetails from '../components/PersonalDetails';
import ExperienceDetails from '../components/ExperienceDetails';
import SkillsetDetails from '../components/SkillsetDetails';
import CertificationsDetails from '../components/CertificationsDetails';

function Dashboard() {
  const [blackOpacity, setBlackOpacity] = useState(false);
  const [educationsPage, setEducationPage] = useState(false);
  const [projectsPage, setProjectsPage] = useState(false);
  const [personalPage, setPersonalPage] = useState(false);
  const [experiencePage, setExperiencePage] = useState(false);
  const [skillsetsPage, setSkillsetsPage] = useState(false);
  const [certifications, setCertifications] = useState(false);

  const modalObj = {
    "education": setEducationPage,
    "projects": setProjectsPage,
    "personal": setPersonalPage,
    "experience": setExperiencePage,
    "skillsets": setSkillsetsPage,
    "certifications": setCertifications
  }

  const resetModals = () => {
    setEducationPage(false);
    setProjectsPage(false);
    setPersonalPage(false);
    setExperiencePage(false);
    setSkillsetsPage(false);
    setCertifications(false);
  }

  const setModal = (flag) => {
    scrollTo(0, 0);
    resetModals();
    setBlackOpacity(true);
    modalObj[flag](true);
  }

  return (
    <>
      <div className='z-10 overflow-hidden relative min-h-screen min-w-screen gap-4 flex items-center justify-center p-4 bg-gradient-to-br from-black via-gray-900 to-green-900'>
        <div className='relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-1 max-w-[1024px] md:grid-cols-4'>
          <ProfileAndEducation setModal={setModal} />

          <ExperienceAndSkills setModal={setModal} />

          <Contacts setModal={setModal} />
        </div>
      </div>
      {blackOpacity &&
        <div className='bg-black w-[100vw] h-[100%] z-100 top-0 opacity-80 overflow-hidden fixed' onClick={() => setBlackOpacity(false)}>
          {educationsPage && <EducationDetails />}
          {projectsPage && <ProjectDetails />}
          {personalPage && <PersonalDetails />}
          {experiencePage && <ExperienceDetails />}
          {skillsetsPage && <SkillsetDetails />}
          {certifications && <CertificationsDetails />}
        </div>
      }
    </>
  );
}

export default Dashboard;