import { StyledProjectItem } from '../../styles/Projects/ProjectsLayout/StyledProjectsSection';
import {
  StyledProjectImageContainer,
  StyledProjectImage,
} from '../../styles/Projects/ProjectImage/StyledProjectImage';
import {
  StyledProjectContent,
  StyledProjectContentBorder,
} from '../../styles/Projects/ProjectContent/StyledProjectContent';
import { StyledProjectDescriptionContainer } from '../../styles/Projects/ProjectContent/StyledProjectDescriptionContainer';

import {
  projectSlideLeftVariants,
  projectSlideRightVariants,
} from '../../utils/animations';
import { useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useGlobalContext } from '../../Context/Context';

const Project = ({ project, description, alternate }) => {
  const { t } = useTranslation();
  const { theme } = useGlobalContext();
  const shouldReduceMotion = useReducedMotion();

  return (
    <StyledProjectItem
      initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
      whileInView='visible'
      viewport={{ once: true, amount: 0.4 }}
      variants={
        !alternate ? projectSlideLeftVariants : projectSlideRightVariants
      }
      alternate={alternate}
    >
      <StyledProjectImage pageTheme={theme} alternate={alternate}>
        <StyledProjectImageContainer>
          <picture>
            <source
              srcSet={project.imageUrl}
              type='image/webp'
              media='(min-width: 768px)'
            />
            <source
              srcSet={project.mobileUrl}
              type='image/webp'
              media='(max-width: 768px)'
            />
            <img src={project.imageUrl} alt={project.description} />
          </picture>
        </StyledProjectImageContainer>
      </StyledProjectImage>

      <StyledProjectContent alternate={alternate}>
        <StyledProjectContentBorder alternate={alternate}>
          <span>{t('featured-tag')}</span>
          <h3>{project.title}</h3>
          <StyledProjectDescriptionContainer>
            <p>{description}</p>
          </StyledProjectDescriptionContainer>
        </StyledProjectContentBorder>
      </StyledProjectContent>
    </StyledProjectItem>
  );
};

export default Project;
