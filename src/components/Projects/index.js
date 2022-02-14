import { ContainerSection } from "../../golbal-styles"

import { ProjectItem, ProjectList, Title } from "./Projects.elements";
import { CardProject } from "../CardProject";

import { projectList } from '../../data/projects';

export const Projects = () => {

  const getItems = () => {
    return projectList.map((item, i) => (
      <ProjectItem key={i}>
        <CardProject {...item} />
      </ProjectItem>)
    )
  }

  return (
    <ContainerSection scroll width='95%' >
      <ProjectList>
        {getItems()}
      </ProjectList>
    </ContainerSection>
  )
}
