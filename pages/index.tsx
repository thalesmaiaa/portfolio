import type { NextPage } from 'next'

import { Box } from '@mui/material'
import {
  AboutMe,
  CustomDivider,
  Introduction,
  Projects,
  Skills,
} from '../components'

export type ProjectProps = {
  name: string
  description: string
  language: string
  html_url: string
  homepage: string
  isExternal: boolean
}

type Props = {
  projects: ProjectProps[]
}

const Home: NextPage<Props> = (props) => {
  const { projects } = props

  return (
    <>
      <div>
        <Box>
          <Introduction />
          <CustomDivider />
          <AboutMe />
          <Skills />
          <Projects projects={projects} />
        </Box>
      </div>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const request = await fetch('https://api.github.com/users/thalesmaiaa/repos')
  const data = await request.json()

  const projects = [...data, ...ExternalProjects]

  return {
    props: {
      projects,
    },
    revalidate: 5,
  }
}

export const ExternalProjects = [
  {
    name: 'Foto Detective',
    description:
      'Enhancement of forensic experts work with management of reports and image processment',
    language: 'Next.Js and Material-UI',
    html_url:
      'https://f8de7e29702db87593299ee1c2b9d90d-staging.fotodetective.com.br/static/forense-logo.svg',
    homepage: 'fotodetective.com.br/login',
    isExternal: true,
  },
  {
    name: 'Sippi',
    description:
      'Administration system that interacts external company inovation projects proposals',
    language: 'ReactJS and Sass',
    html_url:
      'https://user-images.githubusercontent.com/84349239/210171233-d49cbb50-4312-42f6-a76d-5ec01ddcbf7e.png',
    homepage: 'https://sippi.polodeinovacao.ifce.edu.br/login',
    isExternal: true,
  },
]
