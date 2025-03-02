import HeroBackground from './HeroBackground';
import {
  StyledHeroContainer,
  StyledHeroSection,
  StyledHeroSectionBackdrop,
} from '../../styles/Hero/HeroLayout/StyledHeroLayout';
import StyledTextBox from '../../styles/Hero/HeroText/StyledTextBox';
import {
  childHeroTextVariants,
  parentHeroTextVariants,
} from '../../utils/animations';
import { motion, useReducedMotion } from 'framer-motion';
import { useGlobalContext } from '../../Context/Context';

const Hero = () => {
  const { theme } = useGlobalContext();
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <StyledHeroSectionBackdrop>
        <StyledHeroSection>
          <HeroBackground />
          <StyledHeroContainer>
            <motion.div>
              <StyledTextBox
                pageTheme={theme}
                initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
                animate="visible"
                variants={parentHeroTextVariants}
              >
                <motion.div variants={childHeroTextVariants}>
                  <h1>
                   Hi there, I'm <span>Cheng</span>
                  </h1>
                </motion.div>
                <motion.div variants={childHeroTextVariants}>
                  <h2>Welcome to My Ikebana Journey </h2>
                </motion.div>
                <motion.div variants={childHeroTextVariants}>
                  <p>Finding Balance, Beauty, and Emotion Through Flowers</p>
                </motion.div>
                <motion.div variants={childHeroTextVariants}>
                  <motion.a
                    pageTheme={theme}
                    whileTap={shouldReduceMotion ? { scale: 1 } : { scale: 0.97 }}
                    href="/followerJP/1000words.pdf"  // ✅ Corrected to link to the essay PDF
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My Reflections
                  </motion.a>
                </motion.div>
              </StyledTextBox>
            </motion.div>
          </StyledHeroContainer>
        </StyledHeroSection>
      </StyledHeroSectionBackdrop>
    </>
  );
};

export default Hero;

