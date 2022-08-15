import { Box, Container, Divider } from '@mui/material'
import type { NextPage } from 'next'

import { Navbar } from '../components/navbar/navbar'
import { Introduction } from '../components/introduction/introduction'
import { Skills } from '../components/skills/skills'
import { AboutMe } from '../components/about/about'
import { styles } from '../styles'
import { Projects } from '../components/projects/projects'
import { ContactMe } from '../components/contact/contact'
import { CustomFabButton } from '../components/fabButton/fabButton'



const Home: NextPage = () => {


  return (
   <>
   <div>
   <CustomFabButton />
   <Box 
   sx={styles.app}
    >
  
    <Navbar />
   

    <Container maxWidth="md">
   
      <Introduction />
      <Skills />
      <Divider sx={styles.divider}/>
      <AboutMe />
      <Divider sx={styles.divider}/>
      <Projects />
      <Divider sx={styles.divider}/>
      <ContactMe />
     
    </Container>
  
   
   </Box>
   </div>
  
   
    
   </>
  )
}

export default Home
