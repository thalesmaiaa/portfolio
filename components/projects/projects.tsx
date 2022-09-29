import { useState } from "react";
import { useRouter } from "next/router";

import { classes } from "../../utils";
import { Box, Card, CardContent, Grid, Grow, Typography } from "@mui/material";

import styles from "./projects.module.scss";

type Project = {
  name: string;
  description: string;
  language: string;
  html_url: string;
  homepage: string;
};

type Grow = {
  [id: number]: boolean;
};

type Props = {
  projects: Project[];
  showProjects: Grow[];
  gitProjects: number;
};

export const Projects: React.FC<Props> = (props) => {
  const { projects, showProjects, gitProjects } = props;

  const [showProject, setShowProject] = useState<Grow[]>(showProjects);
  const router = useRouter();

  function capitalize(word: string) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }

  function handleName(name: string) {
    const newName = capitalize(name);
    const capitalizedName = newName.split("-");

    const projectName = capitalizedName.map((name, id) => {
      return capitalize(name);
    });

    return projectName;
  }

  return (
    <Box className={styles.projectsContainer}>
      <Typography variant="h6" className={styles.projectsTitle}>
        My Recent Work
      </Typography>
      <Typography variant="h6" className={styles.projectsSubtitle}>
        Here are some projects I've worked on.
      </Typography>

      <>
        <Grid container className={styles.projectsList}>
          {projects.map((project, id) => (
            <Grid
              item
              xs={4}
              className={styles.projectDiv}
              onClick={() =>
                router.push(
                  project.homepage.includes("github")
                    ? project.homepage
                    : `https://${project.homepage}`
                )
              }
              key={id}
            >
              <Card
                className={
                  id > gitProjects - 1
                    ? classes(styles.projectCard, styles.imageCard)
                    : styles.projectCard
                }
                onMouseOver={() =>
                  setShowProject({ ...showProject, [id]: { [id]: false } })
                }
                onMouseLeave={() =>
                  setShowProject({ ...showProject, [id]: { [id]: true } })
                }
              >
                <CardContent className={styles.cardContent}>
                  <Grow in={showProject[id][id]}>
                    <div className={styles.cardContent}>
                      {id > gitProjects - 1 ? (
                        <>
                          <img src={project.html_url} />
                        </>
                      ) : (
                        <Typography className={styles.projectName}>
                          {handleName(project.name)}
                        </Typography>
                      )}
                    </div>
                  </Grow>

                  <Grow in={!showProject[id][id]}>
                    <div className={styles.projectHideDesc}>
                      <Typography
                        className={
                          id > gitProjects - 1
                            ? styles.projectImageDescription
                            : styles.projectDescription
                        }
                      >
                        {project.description}
                      </Typography>
                      <Typography
                        className={
                          id > gitProjects - 1
                            ? styles.projectImageLanguage
                            : styles.projectLanguage
                        }
                      >
                        <strong>Made with: {project.language}</strong>
                      </Typography>
                    </div>
                  </Grow>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    </Box>
  );
};
