import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import GitHubIcon from '@mui/icons-material/GitHub';
import { DiReact } from "react-icons/di";
import { SiNextdotjs, SiTypescript } from "react-icons/si"
import { 
    Box, 
    List, 
    ListItem, 
    ListItemIcon, 
    Typography 
} from "@mui/material";
import { styles } from './styles';


export const Skills: React.FC = () => {

    const leftSideSkills = [
        <HtmlIcon fontSize="large" sx={styles.skillsColor}/>,
        <CssIcon fontSize="large" sx={styles.skillsColor}/>,
        <JavascriptIcon fontSize="large" sx={styles.skillsColor}/>, 
             
    ]

    const rightSideSkills = [  
        <SiNextdotjs size="2.2em"style={styles.skillsColor}/>,
        <DiReact size="2.2em" style={styles.skillsColor}/>,
        <SiTypescript size="2.2em" style={styles.skillsColor} />   
    ]
    
    return (
        <>
            <Typography variant="h6" sx={styles.skillsTitle}>
                TECHNOLOGIES I'VE BE WORKING:
            </Typography>
            <Box sx={styles.skillsArea}>
                
            <List sx={styles.skillsList}>
                {leftSideSkills.map((skill, idx) => 
                     
                     <ListItem key={idx} sx={styles.skillsItem}>
                        
                        <ListItemIcon>
                            {skill}
                        </ListItemIcon>
                    </ListItem>
                    
                )}
            </List>
            <List sx={styles.skillsList}>
                {rightSideSkills.map((skill , idx) => 
                     
                    <ListItem key={idx} sx={styles.skillsItem}>

                        <ListItemIcon>
                            {skill}
                        </ListItemIcon>
                       
                        {/* </Box> */}
                       
                    </ListItem>
                    
                    
                )}
            </List>

            </Box>
           
        </>
    )
}