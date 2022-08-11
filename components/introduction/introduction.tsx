import { Box, Container, Typography } from "@mui/material"
import { styles } from "./styles"


export const Introduction: React.FC = () => {
    return (
        <>

        <Box sx={styles.skillsContainer}>
                <Typography sx={styles.name} variant="h2">
                    Hello, my name is THALES.
                </Typography>
                <Typography sx={styles.presentation} variant="h6">
                          
                    I'm a Front-end developer living in Brazil(Fortaleza/CE), 
                    and this is a website that talks about me, 
                    enumerate my coding skills and have some projects that you might want to see .
                </Typography>
            </Box>

            
        </>
    )
}