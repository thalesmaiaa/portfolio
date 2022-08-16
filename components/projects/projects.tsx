import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { styles } from "./styles";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from "next/link";
import { useRouter } from "next/router";

interface Project {
    name: string;
    description: string;
    language: string;
    html_url: string;
    homepage: string;
}

export const Projects: React.FC = () => {

    const [projects, setProjects] = useState<Project[]>([]);
    const router = useRouter();


    useEffect(() => {
        fetch('https://api.github.com/users/thalesmaiaa/repos')
        .then(response => response.json())
        .then(data => setProjects(data))
    }, []);

    return (
        <Grid container id="projects" sx={{mb: 3}}>
            <Grid item xs={12}>
            <Typography variant="h6" sx={styles.projectsTitle}>
                PROJECTS
            </Typography>
            </Grid>
            
            {/* <Grid item xs={6}> */}
                <>
                    {projects.map((project, id) => 
                    <Box sx={styles.projectDiv}
                    onClick={() => router.push(project.homepage.includes("github") ? project.homepage : `https://${project.homepage}`)} key={id} >
                        <Grid item xs={12} md={12} sx={styles.projectArea}>
                            <Card>
                            <CardContent sx={{height: "160px"}}>
                                <Typography 
                                sx={styles.projectName}
                                >
                                    {id+1}  <ArrowRightAltIcon /> {project.name}
                                    </Typography>
                                <Typography 
                                // variant="body2"
                                sx={styles.projectDescription}
                                >
                                    {project.description}
                                </Typography>
                                <Typography>Made with: {project.language}</Typography>
                            </CardContent>
                            </Card>
                        </Grid>
                     {/* <Button> */}
                     
                     {/* </Button> */}
                    
                    </Box>
                   
                    )}
                </>
               
            {/* </Grid> */}
        </Grid>
    )
}