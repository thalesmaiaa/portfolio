import React, { useState } from 'react'

import HtmlIcon from '@mui/icons-material/Html'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import JavascriptIcon from '@mui/icons-material/Javascript'

import { DiReact, DiGit, DiSass } from 'react-icons/di'
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'
import { Box, Grid, IconButton, Pagination, Typography } from '@mui/material'

import styles from './skills.module.scss'

type Skill = {
  icon?: React.ReactNode
  name?: string
}

type SkillsProps = {
  skills: Skill[]
  page: number
}

export const Skills: React.FC = () => {
  const [page, setPage] = useState(1)

  const count = getNumberOfPages(skills)

  return (
    <Box className={styles.skillsContainer}>
      <Typography variant="h6" className={styles.skillsTitle}>
        {"Techs I've Been Working:"}
      </Typography>
      <Box className={styles.skillsArea}>
        <Grid container>
          <Lista skills={skills} page={page} />
        </Grid>
        <Pagination
          count={count}
          className={styles.pagination}
          onChange={(event, newPage) => setPage(newPage)}
        />
      </Box>
    </Box>
  )
}

const Lista: React.FC<SkillsProps> = (props) => {
  const { skills, page } = props

  const start = page === 1 ? 0 : 2 ** page
  const end = page * 4

  const pageSkills = skills.slice(start, end)

  return (
    <>
      {pageSkills.map((skill, idx) => (
        <Grid item xs={6} key={idx} className={styles.skill}>
          <IconButton>{skill.icon}</IconButton>
          <ArrowRightAltIcon fontSize="large" />
          <Typography className={styles.skillName}>{skill.name}</Typography>
        </Grid>
      ))}
    </>
  )
}

const getNumberOfPages = (array: Skill[]) => {
  return array.length / 4
}

const skills = [
  {
    icon: <HtmlIcon fontSize="large" className={styles.skillsIcon} />,
    name: 'HMTL',
  },
  {
    icon: <DiSass size="35px" className={styles.skillsIcon} />,
    name: 'SASS',
  },
  {
    icon: <SiNextdotjs size="35px" className={styles.skillsIcon} />,
    name: 'Next',
  },
  {
    icon: <DiReact size="35px" className={styles.skillsIcon} />,
    name: 'React',
  },
  {
    icon: <SiTypescript size="35px" className={styles.skillsIcon} />,
    name: 'TypeScript',
  },
  {
    icon: <JavascriptIcon fontSize="large" className={styles.skillsIcon} />,
    name: 'JavaScript',
  },
  {
    icon: <DiGit size="35px" className={styles.skillsIcon} />,
    name: 'Git & Github',
  },
  {
    icon: <SiTailwindcss size="35px" className={styles.skillsIcon} />,
    name: 'Tailwind',
  },
]
