import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import CodeIcon from "@mui/icons-material/Code";

import styles from "./navbar.module.scss";

export const Navbar: React.FC = () => {
  return (
    <>
      <Box className={styles.navContainer}>
        <IconButton className={styles.navItem}>
          <CodeIcon fontSize="large" sx={{ color: "#34B3F1" }} />
        </IconButton>
        <Box className={styles.linksArea}>
          <Link href="#projects">
            <a>
              <Typography className={styles.links}>PROJECTS</Typography>
            </a>
          </Link>
          <Link href="#aboutMe">
            <a>
              <Typography className={styles.links}>ABOUT ME</Typography>
            </a>
          </Link>
        </Box>
      </Box>
    </>
  );
};
