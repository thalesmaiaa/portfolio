import { Box, Typography } from "@mui/material";

import { classes } from "../../utils";

import styles from "./introduction.module.scss";

export const Introduction: React.FC = () => {
  return (
    <>
      <Box className={styles.skillsContainer}>
        <Typography className={styles.name} variant="h2">
          Frontend Developer & Software Developer
        </Typography>
        <Typography className={styles.presentation} variant="h3">
          {"My name is Thales and this is a website about me,"}
          {
            "  show a few technologies that i've been working recently and list some projects that you might want to see."
          }
        </Typography>
        <Box className={styles.imagesArea}>
          <div className={classes(styles.images, styles.desktopImage)}>
            <img
              src="https://cdn-icons-png.flaticon.com/256/2920/2920244.png"
              className={classes(styles.image, styles.webImage)}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/6062/6062646.png"
              className={classes(styles.image, styles.laptopImage)}
            />

            <img
              src="https://cdn-icons-png.flaticon.com/256/644/644667.png"
              className={classes(styles.image, styles.codeImage)}
            />
          </div>
        </Box>
      </Box>
    </>
  );
};
