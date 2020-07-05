import styled from '@emotion/styled';
import {css} from '@emotion/core';

export const buttonStyle = (theme: any) => css({
    font: `400 ${theme.fonts.main} Lato,sans-serif`,
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.2s'
});

export const Button = styled.button`
    ${({theme}) => buttonStyle(theme)};
    height: 34px;
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 4px;
    background-color: ${({theme}: any) => theme.colors.white};
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.15);
    padding: 0 20px;
    color: ${({theme}: any) => theme.colors.charcoal};
    &:hover {
        box-shadow: 0 0 0 4px rgba(0,0,0,0.15);
    }
    &:active {
        background: linear-gradient(180deg, #FFFFFF 0%, #F3F3F3 100%);
        box-shadow: none;
    }
    &:disabled {
        border: 1px solid rgba(0,0,0,0.01);
        background-color: rgba(255,255,255,0.2);
        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.02);
        color: rgba(${({theme}: any) => theme.colors.charcoal}, .2)
    }
`;

export const SuccessButton = styled(Button)`
    background: linear-gradient(180deg, rgba(0,191,165,1) 0%, rgba(0,166,144,1) 100%);
    border: 1px solid rgba(0,153,133,1);
    color: ${({theme}: any) => theme.colors.white};
    &:hover {
        background: linear-gradient(180deg, rgba(0,182,170,1) 0%, rgba(0,152,131,1) 100%);
        border: 1px solid rgba(6,107,93,0.1);
        box-shadow: 0 0 0 4px rgba(0,191,165,0.2);
    }
    &:active {
        box-shadow: none;
        border: 1px solid rgba(1,119,103,0.1);
        background: linear-gradient(180deg, rgba(1,158,148,1) 0%, rgba(0,131,113,1) 100%);
    }
    &:disabled {
        border: 1px solid rgba(0,121,105,0.1);
        background: linear-gradient(180deg, rgba(0,182,170,1) 0%, rgba(0,152,131,1) 100%);
        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
    }
`

export const SmallButton = styled.button`
    ${({theme}) => buttonStyle(theme)};
    background: white;
    border: 1px solid rgba(0,0,0,0.1);
    color: ${({theme}:any) => theme.colors.charcoal};
    height: 28px;
    padding: 3px 10px 3px 5px;
`;