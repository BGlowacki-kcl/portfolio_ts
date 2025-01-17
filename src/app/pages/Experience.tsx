import React from 'react'
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import ExperienceDate from '../components/ExperienceDate';
import ExperienceText from '../components/ExperienceText';

interface ExperienceProps {
  ContactRef: React.RefObject<HTMLDivElement>;
}

const Experience: React.FC<ExperienceProps> = ({ContactRef}) => {

  const scrollToSection = () => {
    if (ContactRef.current) {
      ContactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex flex-col justify-center items-start pt-10 pb-10 w-full z-30'>
      <ExperienceDate date="2021 - Present" />
      <ExperienceText title="King's College London" skills="Bachelor's Degree in Computer Science with Management" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
      <ExperienceDate date="2022 - Present" />
      <ExperienceText title="King's College London" skills="Bachelor's Degree in Computer Science with Management" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
      <ExperienceDate date="2021 - Present" />
      <ExperienceText title="King's College London" skills="Bachelor's Degree in Computer Science with Management" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
      <ExperienceDate date="2021 - Present" />
      <ExperienceText title="King's College London" skills="Bachelor's Degree in Computer Science with Management" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
      <button 
        className="ml-auto mr-auto bottom-6 z-20 text-black px-6 py-3 rounded-lg shadow-md hover:bg-secondary focus:outline-none animate-pulse"
        onClick={scrollToSection}
      >
        <KeyboardDoubleArrowDownOutlinedIcon />
      </button>

    </div>
  )
}

export default Experience