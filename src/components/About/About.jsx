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
          <h2 id='about'> about ikebana</h2>
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
                <source type='image/webp' srcSet='rasters/flower2.webp' />
                <img
                  src='/rasters/n02.webp'
                  alt='kawase-toshiro1'
                />
              </picture>
            </StyledLandscapeContainer>
            <StyledPortraitContainer>
              <picture>
                <source type='image/webp' srcSet='rasters/flower1.webp' />
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
            Ikebana (生け花) is the Japanese art of flower arrangement, but it is more than just placing flowers in a vase. It is a practice of balance, movement, and emotion. Unlike Western floral design, Ikebana embraces asymmetry, negative space (Ma, 間), and simplicity, allowing each element to breathe.
          </p>
          <p>
            At its core, Ikebana is about Kokoro (心)—the heart and spirit of the arranger. Every branch, stem, and empty space is placed with intention, creating a quiet dialogue between nature and the artist. Over centuries, it has evolved from temple offerings to structured forms like Rikka (立花) and Shōka (生花), and now into modern Jiyuka (自由花), where creativity takes precedence. More than an art form, Ikebana is a meditation—a fleeting moment of beauty, a reflection of nature’s impermanence, and a space for quiet expression.
          </p>
        </StyledAboutTextContainer>
      </StyledAboutSection>
    </>
  );
};

export default About;
