import { Box, Typography } from "@mui/material"
import { styles } from "./stlyes"

export const AboutMe = () => {
    return (
        <Box id="aboutMe">
            <Typography variant="h6" sx={styles.aboutTitle}>
                ABOUT ME
            </Typography>
            <Typography sx={styles.content}>
            {"I'm a Front-end developer located in Brazil. Currently,"}
            {"i'm studying computer science at Universidade Estadual do Ceará(UECE)."}
            </Typography>
            <Typography sx={styles.content}>
            Problem solver and always trying to get better at my skills.
            High interest in the Front-end area and working on ambitious projects with great people.
            </Typography>
        </Box>
    )
}