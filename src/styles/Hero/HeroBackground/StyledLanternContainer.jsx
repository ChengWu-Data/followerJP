import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledLanternContainer = styled(motion.button)`
  width: 13rem; /* ✅ Adjust lantern size */
  position: absolute; /* ✅ Make it independent from tree */
  top: -5rem; /* ✅ Position near tree */
  left: 3rem; /* ✅ Adjust based on design */
  background-color: transparent;
  cursor: pointer;
  z-index: 1500;
  display: flex;
  flex-direction: column;
  align-items: center;

  & svg {
    width: 100%;
    height: auto;
  }

  & div {
    position: absolute;
    bottom: 2.5rem; /* ✅ Adjust button position */
    left: 50%;
    transform: translateX(-50%);
    width: 3rem; /* ✅ Scale button */
    height: 3rem;
  }

  /* ✅ Hide tree but keep lantern on mobile */
  @media ${props => props.theme.bp.mobileM} {
    top: 1rem; /* ✅ Move lantern up on mobile */
    left: 1rem; /* ✅ Adjust position */
    width: 10rem; /* ✅ Scale lantern */
  }
`;

