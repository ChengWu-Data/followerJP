import { StyledAboutSection } from '../../styles/About/AboutLayout/StyledAboutLayout';
import { StyledAboutTextContainer } from '../../styles/About/AboutText/StyledAboutTextContainer';
import {
  StyledPictureContainer,
  StyledPictureCollage,
  StyledLandscapeContainer,
  StyledPortraitContainer,
} from '../../styles/About/AboutPictures/StyledAboutPictures';
import {
  picturesTextVariants,
} from '../../utils/animations';
import { useReducedMotion } from 'framer-motion';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';
import { useGlobalContext } from '../../Context/Context';

const About = () => {
  const { theme } = useGlobalContext();
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <>
      <StyledAboutSection pageTheme={theme}>
        <StyledSectionHeading>
          <h2 id='about'> About Me</h2>
        </StyledSectionHeading>

        <StyledPictureContainer
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          whileInView='visible'
          viewport={{ once: true }}
          variants={picturesTextVariants}
        >
          <StyledPictureCollage>
            <StyledLandscapeContainer>
              <picture>
                <source type='image/webp' srcSet='/rasters/n02.webp' />
                <img
                  src='/rasters/n02.webp'
                  alt='kawase-toshiro1'
                />
              </picture>
            </StyledLandscapeContainer>
            <StyledPortraitContainer>
              <picture>
                <source type='image/webp' srcSet='/rasters/n01.webp' />
                <img
                  src='/rasters/n01.webp'
                  alt='kawase-toshiro2'
                />
              </picture>
            </StyledPortraitContainer>
          </StyledPictureCollage>
        </StyledPictureContainer>

        <StyledAboutTextContainer
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          whileInView='visible'
          viewport={{ once: true }}
          variants={picturesTextVariants}
        >
          <p>
            Welcome to my portfolio! My work blends creativity and precision, capturing the essence of artistic vision through thoughtful compositions.
          </p>
          <p>
            I find inspiration in the subtle interplay of nature, space, and movement, crafting designs that reflect balance and harmony.
          </p>
        </StyledAboutTextContainer>
      </StyledAboutSection>
    </>
  );
};

export default About;
