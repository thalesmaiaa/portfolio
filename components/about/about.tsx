import { Box, Typography } from '@mui/material'

import styles from './about.module.scss'

export const AboutMe = () => {
  return (
    <Box id="aboutMe" className={styles.aboutContainer}>
      <Box className={styles.aboutText}>
        <Typography variant="h6" className={styles.aboutTitle}>
          About Me
        </Typography>
        <Typography className={styles.content}>
          {`Hey there, I'm Thales, a 20-year-old Frontend Developer who thrives on crafting remarkable digital experiences. My journey in the world of technology revolves around my unyielding passion for user-centric design and the creation of software that positively impacts lives. This is the virtual space where I'd like to share some of my recent technological endeavors and showcase a glimpse of the projects that define my creative journey.`}
        </Typography>
      </Box>
    </Box>
  )
}
