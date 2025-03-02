import { projectData } from '../../data/projectData';

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
      
        <h2 id="projects">My Arrangements</h2>
      

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
