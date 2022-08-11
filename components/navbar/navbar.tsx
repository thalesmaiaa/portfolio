import { Box, IconButton, Typography } from "@mui/material"
import Link from "next/link"
import CodeIcon from '@mui/icons-material/Code';
import { styles } from "./styles"

export const Navbar: React.FC = () => {
    return (
        <>
        
            <Box 
            sx={styles.navContainer}>
                <IconButton sx={styles.codeIcon}>
                    <CodeIcon fontSize="large"/>
                </IconButton>
                <Box sx={styles.linksArea}>
                <Link href="#projects"> 
                <a>
                <Typography sx={styles.links}>PROJECTS</Typography>
                </a>
                    
                </Link>
                <Link href="#aboutMe">
                    <a>
                    <Typography sx={styles.links}>ABOUT ME</Typography>
                    </a>
                   
                </Link>
                </Box>
               
               
               
            </Box>
        </>
    )
}