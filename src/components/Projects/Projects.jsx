import { projectData } from '../../data/projectData';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';
import {
  StyledProjectsSection,
  StyledProjectsList,
} from '../../styles/Projects/ProjectsLayout/StyledProjectsSection';
import Project from './Project';
import { useReducedMotion } from 'framer-motion';

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <StyledProjectsSection>
      <StyledSectionHeading>
        <h2 id="projects">Projects</h2>
      </StyledSectionHeading>
      <StyledProjectsList>
        {projectData.map((project, index) => {
          return (
            <Project
              key={project.id}
              project={project}
              description={projectData[index].description}
              alternate={index % 2 !== 0}
            />
          );
        })}
      </StyledProjectsList>
    </StyledProjectsSection>
  );
};

export default Projects;
