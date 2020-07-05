import styled from '@emotion/styled';

export const Input = styled.input`
      border: 1px solid rgba(0,0,0,0.07);
      border-radius: 16px;
      height: 34px;
      background-color: rgba(0,0,0,0.01);
      width: 100%;
      box-sizing: border-box;
      font: ${({theme}: any) => theme.fonts.main} Lato,sans-serif;
      color: ${({theme}: any) => theme.colors.charcoal};
      padding-left: 5px;
`;
