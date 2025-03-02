import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledTreeBranchContainer = styled(motion.div)`
  position: absolute;
  top: -7rem; /* ✅ Moves tree up on desktop */
  left: -2rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${props => props.theme.bp.desktopXS} {
    top: -20rem;
  }

  & .tree-svg {
    width: 52rem;
    height: auto;

    @media ${props => props.theme.bp.desktopL} {
      width: 50rem;
    }
    @media ${props => props.theme.bp.desktopXS} {
      width: 48rem;
    }
    @media ${props => props.theme.bp.mobileM} {
      display: none !important; /* ✅ Only hide tree on mobile */
    }
  }
`;


