import type { NextPage } from "next";

import { Box } from "@mui/material";
import {
  AboutMe,
  CustomDivider,
  Introduction,
  Navbar,
  Projects,
  Skills,
} from "../components";

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

const Home: NextPage<Props> = (props) => {
  const { projects, showProjects, gitProjects } = props;

  return (
    <>
      <div>
        <Box>
          <Navbar />

          <Introduction />

          <CustomDivider />
          <AboutMe />
          <Skills />
          <Projects
            projects={projects}
            showProjects={showProjects}
            gitProjects={gitProjects}
          />
        </Box>
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const request = await fetch("https://api.github.com/users/thalesmaiaa/repos");
  const data = await request.json();

  const collapseLength = data.map((project: object, id: number) => {
    return { [id]: true };
  });
  const gitProjects = collapseLength.length;

  ExternalProjects.map((project, id) => {
    data[id + 2] = project;
    collapseLength[id + 2] = {
      [2 + id]: true,
    };
  });

  console.log(collapseLength);

  return {
    props: {
      projects: data,
      showProjects: collapseLength,
      gitProjects: gitProjects,
    },
  };
}

const ExternalProjects = [
  {
    name: "Foto Detective",
    description:
      "Enhancement of forensic experts work with management of reports and image processment",
    language: "Next.Js and Material-UI",
    html_url: "https://fotodetective.com.br/static/forense-logo.svg",
    homepage: "fotodetective.com.br/login",
  },
];
