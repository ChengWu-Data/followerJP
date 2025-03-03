// src/components/Projects/Project.jsx

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
import { useGlobalContext } from '../../Context/Context';

const Project = ({ project, description, alternate }) => {
  const { theme } = useGlobalContext();
  const shouldReduceMotion = useReducedMotion();

  return (
    <StyledProjectItem
      initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={!alternate ? projectSlideLeftVariants : projectSlideRightVariants}
      alternate={alternate}
    >
      <StyledProjectImage pageTheme={theme} alternate={alternate}>
        {/* 让父容器可以进行绝对定位 */}
        <StyledProjectImageContainer style={{ position: 'relative', overflow: 'visible' }}>
          <picture>
            <source
              srcSet={project.imageUrl}
              type="image/webp"
              media="(min-width: 768px)"
            />
            <source
              srcSet={project.mobileUrl}
              type="image/webp"
              media="(max-width: 768px)"
            />
            <img src={project.imageUrl} alt={project.title} />
          </picture>

          {/* 如果有 circleImageUrl，就用绝对定位显示圆形图 */}
          {project.circleImageUrl && (
            <img
              src={project.circleImageUrl}
              alt="circular"
              style={{
                position: 'absolute',
                bottom: '-20px',    // 向下溢出一部分
                right: '-20px',     // 向右溢出一部分
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                border: '4px solid #fff',          // 给个白色边框
                boxShadow: '0 0 10px rgba(0,0,0,0.15)', // 轻微阴影
                zIndex: 2,                          // 确保在主图之上
              }}
            />
          )}
        </StyledProjectImageContainer>
      </StyledProjectImage>

      <StyledProjectContent alternate={alternate}>
        <StyledProjectContentBorder alternate={alternate}>
          <span>Featured</span>
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

