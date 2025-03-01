import { projectData } from '../../data/projectData';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';
import {
  StyledProjectsSection,
  StyledProjectsList,
} from '../../styles/Projects/ProjectsLayout/StyledProjectsSection';
import Project from './Project';
import { useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const Projects = () => {
  const { t } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const shouldReduceMotion = useReducedMotion();

  return (
    <StyledProjectsSection>
      <StyledSectionHeading lang={lang}>
        <h2 id="projects"> {t('projects-heading')}</h2>
      </StyledSectionHeading>
      <StyledProjectsList>
        {projectData.map((project, index) => {
          return (
            <Project
              key={project.id}
              project={project}
              description={t(`projects.${index}.description`)}
              alternate={index % 2 !== 0}
            />
          );
        })}
      </StyledProjectsList>
    </StyledProjectsSection>
  );
};

export default Projects;
