import styled from 'styled-components';

export const StyledSeaweed2Container = styled.div`
  position: absolute;
  bottom: 0rem;
  right: 12rem;
  width: 15rem; /* 增大尺寸 */
  height: 15rem;

  @media ${props => props.theme.bp.tabletL} {
    width: 14rem;
    height: 14rem;
    right: 11.5rem;
  }

  @media ${props => props.theme.bp.tabletS} {
    display: block;
    width: 12rem;
    height: 12rem;
  }
`;
