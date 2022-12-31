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
          {'My name is Thales and this is a website about me,'}
          {
            "  show a few technologies that i've been working recently and list some projects that you might want to see."
          }
          {
            " I'm 19 years old Frontend Developer who  cares profoundly about user  experience and passionate about building excellent softwares that can help lives of others. "
          }
          {
            " When I'm coding, you'll find me playing some games or working out at the gym"
          }
        </Typography>
      </Box>
    </Box>
  )
}
