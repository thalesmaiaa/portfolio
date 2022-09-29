import { Box, Typography } from "@mui/material";
import useWindowSize from "../../hooks/useWindowSize";

import { classes } from "../../utils";

import styles from "./introduction.module.scss";

export const Introduction: React.FC = () => {
  const [width, height] = useWindowSize();

  const imageWidth = width < 700 ? 128 : 256;

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
              src={`https://cdn-icons-png.flaticon.com/${imageWidth}/2920/2920244.png`}
              className={classes(styles.image, styles.webImage)}
            />
            <img
              src={`https://cdn-icons-png.flaticon.com/${
                imageWidth * 2
              }/6062/6062646.png`}
              className={classes(styles.image, styles.laptopImage)}
            />

            <img
              src={`https://cdn-icons-png.flaticon.com/${imageWidth}/644/644667.png`}
              className={classes(styles.image, styles.codeImage)}
            />
          </div>
        </Box>
      </Box>
    </>
  );
};
