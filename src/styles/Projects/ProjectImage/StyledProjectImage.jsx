import styled, { css } from 'styled-components';

export const StyledProjectImageContainer = styled.div`
  display: flex;  /* 让图片容器居中 */
  justify-content: center;
  align-items: center;

  & picture {
    max-width: 50rem;  /* 设定最大宽度，等比例缩小 */
    height: auto;  /* 保持原始比例 */
    display: block;
    border-radius: 0.2rem;

    @media ${props => props.theme.bp.desktopS} {
      height: auto;
      width: auto;
    }

    @media ${props => props.theme.bp.tabletL} {
      height: auto;
      width: 100%;
      max-width: 45rem; /* 在小屏幕上进一步缩小 */
    }

    & img {
      object-fit: contain;  /* 确保图片完整显示 */
      display: block;
      max-width: 100%;  /* 让图片不超出容器 */
      height: auto;
      border-radius: 0.2rem;
    }
  }
`;

export const StyledProjectImage = styled.div`
  grid-column: 1 / 8;
  grid-area: 1 / 1 / -1 / 8;
  box-shadow: 0 0.3rem 0.3rem 0 rgb(0 0 0 / 15%);
  border-radius: 0.2rem;
  box-shadow: 0 1rem 2.5rem -1.8rem ${props => props.theme.primary.li};

  ${props =>
    props.pageTheme === 'dark' &&
    css`
      box-shadow: none;
    `}

  @media ${props => props.theme.bp.desktopS} {
    height: auto;
    width: auto;
  }

  @media ${props => props.theme.bp.tabletL} {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    height: auto;
    width: auto;
  }

  ${props =>
    props.alternate &&
    css`
      grid-column: 6 / -1;
      grid-area: 1 / 6 / -1 / -1;

      @media ${props => props.theme.bp.tabletL} {
        grid-column: 1 / -1;
        grid-row: 1 / 2;
        height: auto;
        width: auto;
      }
    `}
`;
