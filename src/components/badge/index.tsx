import styled from '@emotion/styled';

interface Props {
    value: string | number;
}

export const Badge = styled.span`
    display: inline-block;
    border-radius: 9px;
    height: 18px;
    line-height: 18px;
    padding: 0 5px;
    background-color: ${({theme}: any) => theme.colors.darkGrey};
    color: ${({theme}: any) => theme.colors.white}; 
    font: ${({theme}: any) => theme.fonts.main} Lato,sans-serif;
`