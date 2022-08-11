import { Avatar, Grid, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { styles } from "./styles"

export const ContactMe = () => {

    const router = useRouter();
    

    return (
        <Grid  container>
            <Grid item xs={4} onClick={() => router.push("/contact")}>
            <Typography sx={styles.contact}>FEEL FREE TO CONTACT ME </Typography>
            <Typography sx={styles.contact}>LET'S GET TO WORK TOGETHER</Typography>
            </Grid>
        </Grid>
    )
}