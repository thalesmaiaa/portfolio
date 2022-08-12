import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { DiReact } from "react-icons/di";
import { SiNextdotjs, SiTypescript } from "react-icons/si"
import { 
    Box, 
    Button,
    List, 
    ListItem, 
    ListItemIcon, 
    Typography 
} from "@mui/material";
import { styles } from './styles';


export const Skills: React.FC = () => {

    const leftSideSkills = [
        <Button>
            <HtmlIcon fontSize="large" sx={styles.skillsColor}/>
        </Button>,
        <Button>
            <CssIcon fontSize="large" sx={styles.skillsColor}/>
        </Button>,
        <Button>
            <JavascriptIcon fontSize="large" sx={styles.skillsColor}/>
        </Button>,         
    ]

    const rightSideSkills = [  
        <Button>
            <SiNextdotjs size="2.2em"style={styles.skillsColor}/>
        </Button>,
        <Button>
            <DiReact size="2.2em" style={styles.skillsColor}/>
        </Button>,
        <Button>
            <SiTypescript size="2.2em" style={styles.skillsColor} />
        </Button>,
     
        
           
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