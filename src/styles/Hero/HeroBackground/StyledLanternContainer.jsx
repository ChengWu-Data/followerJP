import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledLanternContainer = styled(motion.button)`
  width: 13rem;
  position: absolute; /* ✅ Ensure it stays positioned independently */
  top: -5rem; /* ✅ Adjust placement near tree */
  left: 3rem;
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
    bottom: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 3rem;
    height: 3rem;
  }

  /* ✅ Revert settings for desktop */
  @media ${props => props.theme.bp.desktopXS} {
    top: -7rem;
    left: 5rem;
    width: 14rem;
  }
`;
