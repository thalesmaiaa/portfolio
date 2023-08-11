import { useRouter } from 'next/router'
import React, { useState } from 'react'

import { classes } from '../../utils'
import { ProjectProps } from '../../pages'

import { Box, Card, CardContent, Grid, Grow, Typography } from '@mui/material'

import styles from './projects.module.scss'

type Props = {
  projects: ProjectProps[]
}

export const Projects: React.FC<Props> = (props) => {
  const { projects } = props

  const showProjects = projects.map(() => {
    return true
  })

  const [showProject, setShowProject] = useState<any[]>(showProjects)
  const router = useRouter()

  function handleCardHover(hoverStatus: 'over' | 'leave', id: number) {
    const updatedProjects = showProject.map((project, index) => {
      if (index === id) {
        return hoverStatus !== 'over'
      }
      return project
    })

    setShowProject(updatedProjects)
  }

  return (
    <Box className={styles.projectsContainer}>
      <Typography variant="h6" className={styles.projectsTitle}>
        My Recent Work
      </Typography>
      <Typography variant="h6" className={styles.projectsSubtitle}>
        {"Here are some projects I've worked on."}
      </Typography>

      <>
        <Grid container className={styles.projectsList}>
          {projects.map((project, id) => {
            return (
              <Grid
                item
                xs={12}
                md={6}
                lg={projects.length > 2 ? 4 : 6}
                className={styles.projectDiv}
                onClick={() =>
                  router.push(
                    project?.homepage?.length
                      ? project.homepage
                      : project.html_url,
                  )
                }
                key={id}
              >
                <Card
                  className={
                    project.isExternal
                      ? classes(styles.projectCard, styles.imageCard)
                      : styles.projectCard
                  }
                  onMouseOver={() => handleCardHover('over', id)}
                  onMouseLeave={() => handleCardHover('leave', id)}
                >
                  <CardContent className={styles.cardContent}>
                    <Grow in={showProject[id]}>
                      <div className={styles.cardContent}>
                        {project.isExternal ? (
                          <>
                            <img src={project.html_url} alt="" />
                          </>
                        ) : (
                          <Typography className={styles.projectName}>
                            {project.name}
                          </Typography>
                        )}
                      </div>
                    </Grow>

                    <Grow in={!showProject[id]}>
                      <div className={styles.projectHideDesc}>
                        <Typography
                          className={
                            project.isExternal
                              ? styles.projectImageDescription
                              : styles.projectDescription
                          }
                        >
                          {project.description}
                        </Typography>
                        <Typography
                          className={
                            project.isExternal
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
            )
          })}
        </Grid>
      </>
    </Box>
  )
}
