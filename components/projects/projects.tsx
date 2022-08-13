import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { styles } from "./styles";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from "next/link";

interface Project {
    name: string;
    description: string;
    language: string;
    html_url: string
}

export const Projects: React.FC = () => {

    const [projects, setProjects] = useState<Project[]>([])


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
                    <Link href={project.html_url} key={id}>
                        <Grid item xs={5} sx={styles.projectArea}>
                            <Card>
                            <CardContent>
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
                    
                    </Link>
                   
                    )}
                </>
               
            {/* </Grid> */}
        </Grid>
    )
}