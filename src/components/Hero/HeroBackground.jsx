import { motion } from 'framer-motion';
import { ReactComponent as TreeBranchSVG } from '../../assets/images/illustrations/blossom-branch-v2OG.svg';
import { ReactComponent as DarkTreeBranchSVG } from '../../assets/images/illustrations/blossom-branch-v2-dark.svg';
import { ReactComponent as SunSVG } from '/src/assets/images/illustrations/rising-sun.svg';
import { ReactComponent as MoonSVG } from '/src/assets/images/illustrations/rising-moonV2.svg';
import { ReactComponent as FujiSVG } from '/src/assets/images/illustrations/mount-fuji-hokusai-near-ejiri-noBg-sakura02Mini.svg';
import { ReactComponent as DarkFujiSVG } from '/src/assets/images/illustrations/fuji-hokusai-dark-themeV2.svg';
import { ReactComponent as CloudSVG } from '/src/assets/images/illustrations/kumo-grayV2.svg';

import { ReactComponent as LightLanternSVG } from '/src/assets/images/illustrations/chouchinV3-light.svg';
import { ReactComponent as DarkLanternSVG } from '/src/assets/images/illustrations/chouchinV3-dark.svg';
import { ReactComponent as DarkModeSVG } from '/src/assets/icons/moon.svg';
import { ReactComponent as LightModeSVG } from '/src/assets/icons/sun.svg';

import { StyledHeroBgClouds } from '../../styles/Hero/HeroBackground/StyledHeroBgClouds';
import { StyledFujiContainer } from '../../styles/Hero/HeroBackground/StyledFujiContainer';
import { StyledSunContainer } from '../../styles/Hero/HeroBackground/StyledSunContainer';
import { StyledTreeBranchContainer } from '../../styles/Hero/HeroBackground/StyledTreeBranchContainer';
import { StyledCloudContainer } from '../../styles/Hero/HeroBackground/StyledCloudContainer';
import { StyledLanternContainer } from '../../styles/Hero/HeroBackground/StyledLanternContainer';

import {
  fujiVariants,
  sunVariants,
  moonVariants,
  branchVariants,
  leftCloudVariants,
  rightCloudVariants,
  lanternVariants,
} from '../../utils/animations';

import { useReducedMotion } from 'framer-motion';
import { useGlobalContext } from '../../Context/Context';

const HeroBackground = () => {
  const shouldReduceMotion = false;

  const { toggleTheme, theme } = useGlobalContext();

  return (
    <>
      <StyledHeroBgClouds />

      {/* ✅ 树枝容器 */}
      <StyledTreeBranchContainer
        id="home"
        initial="hidden"
        animate="visible"
        variants={branchVariants}
      >
        {/* ✅ 树枝 SVG */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={branchVariants}
        >
          {theme === 'light' ? <TreeBranchSVG /> : <DarkTreeBranchSVG />}
        </motion.div>

        {/* ✅ 挂在树上的灯笼 */}
        <StyledLanternContainer
          onClick={toggleTheme}
          animate="visible"
          variants={lanternVariants}
        >
          {theme === 'light' ? <LightLanternSVG /> : <DarkLanternSVG />}

          {/* ✅ 按钮放在灯笼中央 */}
          <div className="theme-toggle">
            {theme === 'light' ? <DarkModeSVG /> : <LightModeSVG />}
          </div>
        </StyledLanternContainer>
      </StyledTreeBranchContainer>

      {/* ✅ 富士山 */}
      <StyledFujiContainer
        initial="hidden"
        animate="visible"
        variants={fujiVariants}
      >
        {theme === 'light' ? <FujiSVG /> : <DarkFujiSVG />}
      </StyledFujiContainer>

      {/* ✅ 太阳 / 月亮 */}
      <StyledSunContainer
        initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
        animate="visible"
        variants={sunVariants}
        pageTheme={theme}
      >
        {theme === 'light' ? (
          <SunSVG />
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={moonVariants}
          >
            <MoonSVG />
          </motion.div>
        )}

        {/* ✅ 右侧云 */}
        <StyledCloudContainer
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          animate="visible"
          variants={rightCloudVariants}
          pageTheme={theme}
        >
          <CloudSVG />
        </StyledCloudContainer>

        {/* ✅ 左侧云 */}
        <StyledCloudContainer
          left
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          animate="visible"
          variants={leftCloudVariants}
          pageTheme={theme}
        >
          <CloudSVG />
        </StyledCloudContainer>
      </StyledSunContainer>
    </>
  );
};

export default HeroBackground;

