import { Typography } from '@mui/material'
import React from 'react'

interface ExperienceTextProps {
    title: string;
    skills: string;
    description: string;
}

const ExperienceText: React.FC<ExperienceTextProps> = ({title, skills, description}) => {
  return (
    <div className="relative flex flex-col justify-center items-start w-1/2 z-30 exp_text">
        <Typography className='font-bold'>{title}</Typography>
        <Typography className="ml-3 font-mono">{skills}</Typography>
        <Typography className="ml-3">{description}</Typography>
    </div>
  )
}

export default ExperienceText