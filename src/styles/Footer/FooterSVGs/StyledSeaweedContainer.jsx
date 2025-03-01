import styled from 'styled-components';

export const StyledSeaweedContainer = styled.div`
  position: absolute;
  bottom: -1rem;
  right: 1rem;
  width: 18rem; /* 增大尺寸 */
  height: 16rem;
  
  @media ${props => props.theme.bp.tabletL} {
    width: 16rem;
    height: 16rem;
    right: 3rem;
  }
  
  @media ${props => props.theme.bp.tabletS} {
    right: 11.3rem;
    bottom: 0.5rem;
    width: 14rem;
    height: 14rem;
  }

  @media ${props => props.theme.bp.mobileM} {
    right: 20.7rem;
    bottom: 0rem;
    width: 12rem;
    height: auto;
  }
`;

