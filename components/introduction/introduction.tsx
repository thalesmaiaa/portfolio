import { Box, Container, Typography } from "@mui/material"
import { styles } from "./styles"


export const Introduction: React.FC = () => {
    return (
        <>

        <Box sx={styles.skillsContainer}>
                <Typography sx={styles.name} variant="h2">
                    Hello, my name is THALES.
                </Typography>
                <Typography sx={styles.presentation} variant="h5">
                          
                   {"This is a website that talks about me, show a few technologies that i've been working recently and list some projects that you might want to see."} 
                </Typography>
            </Box>

            
        </>
    )
}