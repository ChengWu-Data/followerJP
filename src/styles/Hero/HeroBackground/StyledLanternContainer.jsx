import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledLanternContainer = styled(motion.button)`
  width: 13rem; /* ✅ 调整灯笼大小 */
  position: relative; /* ✅ 让灯笼跟随树的位置 */
  background-color: transparent;
  cursor: pointer;
  z-index: 1500;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20rem; /* ✅ 让灯笼更接近树枝 */

  & svg {
    width: 100%;
    height: auto;
  }

  & div {
    position: absolute;
    bottom: 2.5rem; /* ✅ 调整按钮的位置 */
    left: 50%;
    transform: translateX(-50%);
    width: 3rem; /* ✅ 缩小按钮大小 */
    height: 3rem;

    @media ${props => props.theme.bp.desktopXS} {
      bottom: 2.5rem;
    }
    @media ${props => props.theme.bp.tabletS} {
      bottom: 2rem;
    }
  }
`;
