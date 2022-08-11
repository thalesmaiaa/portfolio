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
                <Link href=""> 
                    <Typography sx={styles.links}>Projects</Typography>
                </Link>
                <Link href="">
                    <Typography sx={styles.links}>Linkedin</Typography>
                </Link>
                <Link href="">
                    <Typography sx={styles.links}>About me</Typography>
                </Link>
                </Box>
               
               
               
            </Box>
        </>
    )
}