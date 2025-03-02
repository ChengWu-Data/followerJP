import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledTreeBranchContainer = styled(motion.div)`
  position: absolute;
  top: -7rem; /* ✅ Restore previous positioning */
  left: -2rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* ✅ Hide only for mobile */
  @media ${props => props.theme.bp.mobileM} {
    display: flex; /* ✅ Restore tree on desktop */
  }

  & svg {
    width: 52rem;
    height: auto;

    @media ${props => props.theme.bp.desktopL} {
      width: 50rem;
    }
    @media ${props => props.theme.bp.desktopXS} {
      width: 48rem;
    }
  }
`;
