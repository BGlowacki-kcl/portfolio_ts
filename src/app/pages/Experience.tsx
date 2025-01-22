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
      <ExperienceDate date="2023 - 2026" />
      <ExperienceText title="King's College London" skills="Bachelor's Degree in Computer Science with Management" description="I'm studying Computer Science with Management at King's College London, where I scored 86% in my first year, including 90%+ in all my CS exams. So far, I've learned Java, databases, computer systems, data structures, and even explored management and marketing. This helped me understand how computers work and sharpen my programming skills. In my second year, I’m diving into AI, HRM, operating systems, and exploring new tools like C++, Scala, and Python Django. I’m especially excited about a group project where we’ll build a fully functional web service and manage everything ourselves." />
      <ExperienceDate date="jan - aug 2024" />
      <ExperienceText title="Software Engineer Internship: Headstarter" skills=" Flask • React • Firebase • AWS • git • Vercel" description="I worked with a team of four to build orbitfind.co, an AI-powered event app that ranked #1 on Google, gained 1,000+ LinkedIn impressions, and 130+ waitlist sign-ups. I developed the backend API with Flask, deployed it using AWS, and integrated Firebase for authentication and database management. Balancing weekly courses, I honed my skills in teamwork, problem-solving, and delivering a fully functional product end-to-end." />
      <ExperienceDate date="oct 2024 - now" />
      <ExperienceText title=" Software Engineer for AI training: Outlier AI" skills="Python • Reinforcement Learning • Code review" description="I enhanced AI models by improving Python code and chatbot applications for better performance and accuracy. I developed efficient solutions, robust test cases, and clear feedback while collaborating remotely with a team of experts to advance generative AI capabilities." />
      <ExperienceDate date="nov 2024 - now" />
      <ExperienceText title="Back-end Software Developer: King’s Labs | London" skills="NestJS • JavaScript • REST API • git • Scrum • MySQL • AWS " description="I led the back-end development for an AI-powered educational platform that connects students with tutors, collaborating with a team of five using Scrum methodology. I designed core systems, including real-time updates with web sockets and an efficient notification system for seamless communication. I also optimized data streaming for faster load times and improved scalability, ensuring a smooth and responsive user experience throughout the platform." />
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