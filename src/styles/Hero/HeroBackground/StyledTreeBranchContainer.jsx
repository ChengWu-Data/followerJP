import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledTreeBranchContainer = styled(motion.div)`
  position: absolute;
  top: -7rem; /* ✅ Move tree up */
  left: -2rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${props => props.theme.bp.mobileM} {
    display: none; /* ✅ Completely hide tree on mobile */
  }
`;

