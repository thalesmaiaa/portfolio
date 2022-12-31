import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { Box, Button, IconButton, Typography } from '@mui/material'
import { ExternalProjects, ProjectProps } from '..'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import styles from './project.module.scss'
import { useRouter } from 'next/router'

function Project({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  return (
    <Box className={styles.projectContainer}>
      <Box className={styles.titleContainer}>
        <IconButton onClick={() => router.back()}>
          <ArrowBackIcon />
        </IconButton>
        <Box className={styles.projectDetailsContainer}>
          <Typography className={styles.title}>{data.name}</Typography>
          <Typography className={styles.description}>
            {data.description}
          </Typography>
          <Button
            onClick={() => {
              router.push(
                data.homepage.includes('github')
                  ? data.homepage
                  : `https://${data.homepage}`,
              )
            }}
          >
            Visit the Website
          </Button>
          <img src={data.html_url} alt="" />
        </Box>
      </Box>
    </Box>
  )
}

export default Project

export const getServerSideProps: GetServerSideProps<{
  data: ProjectProps
}> = async (context) => {
  const { name } = context.query

  const request = await fetch(
    `https://api.github.com/repos/thalesmaiaa/${name}`,
  )
  const data = await request.json()

  if (data.message) {
    const projectData = ExternalProjects.find(
      (project) => project.name === name,
    )

    return {
      props: {
        data: projectData,
      },
    }
  }

  return {
    props: {
      data,
    },
  }
}
