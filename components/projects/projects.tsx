import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { classes } from '../../utils'
import { ProjectProps } from '../../pages'

import { Box, Card, CardContent, Grid, Grow, Typography } from '@mui/material'

import styles from './projects.module.scss'

type Props = {
  projects: ProjectProps[]
}

export const Projects: React.FC<Props> = (props) => {
  const { projects } = props

  const showProjects = projects.map((project: object, id: number) => {
    return true
  })

  const [showProject, setShowProject] = useState<any[]>(showProjects)
  const router = useRouter()

  function capitalize(word: string) {
    const lower = word.toLowerCase()
    return word.charAt(0).toUpperCase() + lower.slice(1)
  }

  function handleName(name: string) {
    const newName = capitalize(name)
    const capitalizedName = newName.split('-')

    const projectName = capitalizedName.map((name, id) => {
      return capitalize(name)
    })

    return projectName
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
                onClick={() => router.push(`/project/${project.name}`)}
                // onClick={() =>
                //   router.push(
                //     project.homepage.includes('github')
                //       ? project.homepage
                //       : `https://${project.homepage}`,
                //   )
                // }
                key={id}
              >
                <Card
                  className={
                    project.isExternal
                      ? classes(styles.projectCard, styles.imageCard)
                      : styles.projectCard
                  }
                  onMouseOver={() => {
                    const updatedProjects = showProject.map(
                      (project, index) => {
                        if (index === id) {
                          return false
                        }
                        return project
                      },
                    )
                    setShowProject(updatedProjects)
                  }}
                  onMouseLeave={() => {
                    const updatedProjects = showProject.map(
                      (project, index) => {
                        if (index === id) {
                          return true
                        }
                        return project
                      },
                    )
                    setShowProject(updatedProjects)
                  }}
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
                            {handleName(project.name)}
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
