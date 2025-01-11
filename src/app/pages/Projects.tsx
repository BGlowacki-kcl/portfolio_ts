'use client'

import { Box, Typography } from '@mui/material';
import React from 'react'

const Projects = () => {
  return (
    <Box>
      <Typography>
        A similar one can be yours! 
      </Typography>
      <Box
        textAlign={'center'}
        alignContent={'center'}
      >
        <img src="project1.jpg" alt="project 1" />
      </Box>
    </Box>
  )
}

export default Projects;