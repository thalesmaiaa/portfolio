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
    html_url: 'https://fotodetective.com.br/static/forense-logo.svg',
    homepage: 'fotodetective.com.br/login',
    isExternal: true,
  },
]
