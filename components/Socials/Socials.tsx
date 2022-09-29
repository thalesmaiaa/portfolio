import { useRouter } from "next/router";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, IconButton, Typography } from "@mui/material";

import styles from "./Socials.module.scss";

export const Socials: React.FC = () => {
  const buttons = [
    {
      name: "GitHub",
      icon: <GitHubIcon fontSize="large" />,
      url: "https://github.com/thalesmaiaa",
      color: "#171515",
    },
    {
      name: "Linkedin",
      icon: <LinkedInIcon fontSize="large" />,
      url: "https://www.linkedin.com/in/thalesmaiaa/",
      color: "#0A66C2",
    },
  ];

  const router = useRouter();

  return (
    <Box className={styles.socialsContainer}>
      <div>
        <Typography className={styles.socialsText} variant="h4">
          Interested in working together?
        </Typography>
      </div>
      <div className={styles.buttonsDiv}>
        {buttons.map((button, id) => (
          <div key={id} className={styles.socialButton}>
            <IconButton
              onClick={() => router.push(button.url)}
              size="large"
              sx={{ color: "#fff" }}
            >
              {button.icon}
            </IconButton>
          </div>
        ))}
      </div>
    </Box>
  );
};
