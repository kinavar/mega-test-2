import styled from '@emotion/styled';
import { slideAnimation } from '../../styles';

export const ContextMenu = styled.ul`
      margin: 0;
      padding: 0;
      list-style: none;
      box-shadow: 0 1px 8px 0 rgba(0,0,0,0.1);
      border-radius: 8px;
      background: ${({theme}: any) => theme.colors.white};
      position: fixed;
      top: ${(props: any) => props.y}px;
      left: ${(props: any) => props.x}px;
      z-index: 2;
      min-width: 180px;
      ${slideAnimation}
`;