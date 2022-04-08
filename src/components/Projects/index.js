import { ContainerSection } from "../../golbal-styles"

import { ProjectItem, ProjectList, ProjectListEmpty } from "./Projects.elements";
import { CardProject } from "../CardProject";


import { ProjectsContext } from "../../context/projectsContext";
import { useEffect, useContext } from "react";

export const Projects = () => {

  const { projects, hasError } = useContext(ProjectsContext);
  const getItems = () => {
    return projects.map((item) => (
      <ProjectItem key={item.id}>
        <CardProject {...item} />
      </ProjectItem>)
    )
  }

  return (
    <ContainerSection scroll width='95%' >
      {
        projects.length == 0
          ? <ProjectListEmpty >
            <p>{hasError ? 'Error loading' : 'Loading...'}</p>
          </ProjectListEmpty>
          : <ProjectList>
            {
              getItems()
            }
          </ProjectList>
      }

    </ContainerSection>
  )
}
