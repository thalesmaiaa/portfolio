import { Box, Container } from '@mui/material'
import type { NextPage } from 'next'

import { Navbar } from '../components/navbar/navbar'
import { Introduction } from '../components/introduction/introduction'
import { Skills } from '../components/skills/skills'


const Home: NextPage = () => {
  return (
   <>
   <Box 
   sx={{
    backgroundColor: "#2C3333",
    fontFamily: ['"Poppins"', "sans-serif"].join(",")
  }}
    >
    <Navbar />
    <Container maxWidth="md">
      <Introduction />
      <Skills />
    </Container>
   
   </Box>
    
   </>
  )
}

export default Home
