import { SpeedDial, SpeedDialAction } from "@mui/material"
import ShareIcon from '@mui/icons-material/Share';
import { styles } from "./styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useRouter } from "next/router";


export const CustomFabButton: React.FC = () => {

    const media = [
        {
            name: "GitHub",
            icon:  <GitHubIcon />,
            url: "https://github.com/thalesmaiaa",
            sx: { color: "#171515"}
        },
        {
            name: "Linkedin",
            icon: <LinkedInIcon />,
            url: "https://www.linkedin.com/in/thalesmaiaa/",
            sx: {color: "#0A66C2"}
        },
    
    ]

    const router = useRouter();

    return (
        <>
            <SpeedDial
            ariaLabel="SpeedDial"
            sx={styles.speedDial}
            FabProps={{sx: styles.fabButton}}
            icon={<ShareIcon />}	
			>
                {media.map((app, idx) => 
                    
                        <SpeedDialAction 
                        key={idx}
                        icon={app.icon}
                        tooltipTitle={app.name}
                        sx={app.sx}
                        onClick={() => router.push(app.url)}
                        />
                    
                )}
            </SpeedDial>
        </>
    )
}