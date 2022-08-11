import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import GitHubIcon from '@mui/icons-material/GitHub';
import { DiReact } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si"

import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { styles } from './styles';
import { ReactElement } from 'react';


interface Skill {
    name: string;
    icon: ReactElement
}


export const Skills: React.FC = () => {

    const leftSideSkills = [
        {
            icon: <HtmlIcon fontSize="large" sx={styles.skillsColor}/>
        }, 
        {
            icon: <CssIcon fontSize="large" sx={styles.skillsColor}/>
        },
        {
            icon: <JavascriptIcon fontSize="large" sx={styles.skillsColor}/>
        }
    ]

    const rightSideSkills = 
    [
        {
            name: "NextJS",
            icon: <SiNextdotjs size="2.2em"style={styles.skillsColor}/>, 
        },
        {
            name: "ReactJS",
            icon:  <DiReact size="2.2em" style={styles.skillsColor}/>
        },
        {
            name: "GitHub",
            icon: <GitHubIcon fontSize="large" sx={styles.skillsColor}/>
        }
    ]



    

    return (
        <>
            <Typography variant="h6" sx={styles.skillsTitle}>
                CODING SKILLS
            </Typography>
            <Box sx={styles.skillsArea}>
                
            <List sx={styles.skillsList}>
                {leftSideSkills.map((skill, idx) => 
                     
                     <ListItem key={idx} sx={styles.skillsItem}>
                        
                        <ListItemIcon>
                            {skill.icon}
                        </ListItemIcon>
                    </ListItem>
                    
                )}
            </List>
            <List sx={styles.skillsList}>
                {rightSideSkills.map((skill: Skill , idx) => 
                     
                    <ListItem key={idx} sx={styles.skillsItem}>
                        <Box sx={styles.skillsArea}>
                        <ListItemIcon>
                            {skill.icon}
                        </ListItemIcon>
                        <ListItemText primary={skill.name} sx={styles.skillsColor}/>
                        </Box>
                       
                    </ListItem>
                    
                    
                )}
            </List>

            </Box>
           
        </>
    )
}