import { Typography } from '@mui/material'
import React from 'react'

interface ExperienceDateProps {
    date: string;
}

const ExperienceDate: React.FC<ExperienceDateProps> = ({date}) => {
  return (
    <div className="relative flex flex-row items-center w-2/5 z-30 m-4 exp_date">
        <div className='relative h-2 w-full bg-dark flex-grow'></div> <Typography className='font-serif flex-shrink-0 pl-2' >&nbsp; {date}</Typography>
    </div>
  )
}

export default ExperienceDate