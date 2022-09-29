import { useRouter } from "next/router";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import styles from "./fabButton.module.scss";

export const CustomFabButton: React.FC = () => {
  const media = [
    {
      name: "GitHub",
      icon: <GitHubIcon />,
      url: "https://github.com/thalesmaiaa",
      className: { color: "#171515" },
    },
    {
      name: "Linkedin",
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/thalesmaiaa/",
      className: { color: "#0A66C2" },
    },
  ];

  const router = useRouter();

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial"
        className={styles.speedDial}
        FabProps={{ className: styles.fabButton }}
        icon={<ShareIcon />}
      >
        {media.map((app, idx) => (
          <SpeedDialAction
            key={idx}
            icon={app.icon}
            tooltipTitle={app.name}
            sx={app.className}
            onClick={() => router.push(app.url)}
          />
        ))}
      </SpeedDial>
    </>
  );
};
