import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledFujiContainer = styled(motion.div)`
  position: absolute;
  bottom: -37rem; /* 向下移动山，使其更接近底部 */
  right: 0;
  width: 100rem;
  z-index: 1000;

  @media ${props => props.theme.bp.desktopL} {
    bottom: -38rem; /* 在大屏幕上稍微调整 */
  }

  @media ${props => props.theme.bp.desktopS} {
    transform: translateX(8.5rem);
  }

  @media ${props => props.theme.bp.desktopXS} {
    width: 100%;
    transform: translateX(0);
    transform: translateY(0);
    right: -37rem;
    position: absolute;
    bottom: -39rem; /* 在较小屏幕上继续向下调整 */
    width: 75rem;
    right: 0;
  }

  @media ${props => props.theme.bp.tabletS} {
    width: 60rem;
    bottom: -38rem; /* 在平板上适配 */
  }

  @media ${props => props.theme.bp.mobileL} {
    width: 70rem;
    transform: translateX(13rem);
    bottom: -9rem;
  }

  & svg {
    width: 100%;
    height: 100%;
    max-width: 100%;
    
    @media ${props => props.theme.bp.desktopXS} {
      width: 75rem;
      height: 100%;
      max-width: 100%;
    }
  }
`;
