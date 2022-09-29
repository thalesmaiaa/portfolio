import { Box, Typography } from "@mui/material";

import styles from "./about.module.scss";

export const AboutMe = () => {
  return (
    <Box id="aboutMe" className={styles.aboutContainer}>
      <Box className={styles.aboutText}>
        <Typography variant="h6" className={styles.aboutTitle}>
          About Me
        </Typography>
        <Typography className={styles.content}>
          I'm 19 years old Frontend Developer who cares profoundly about user
          experience and passionate about building excellent softwares that can
          help lives of others.I like imagine useful interaction, developing
          rich web experiences & web applications. When I'm not coding or at the
          gym I might be at the University studying Computer Science.
        </Typography>
      </Box>
    </Box>
  );
};
