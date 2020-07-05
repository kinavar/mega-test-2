import React from 'react';
import styled from '@emotion/styled';

import {WrapperButton} from '../buttons'

const PopupContainer = styled.div`
    padding: 24px 0 32px;
    box-sizing: border-box;
    border-radius: 24px;
    box-shadow: 1px 1px 16px 0 rgba(0,0,0,0.05);
    position: relative;
    max-width: 538px;
    margin: 50px auto;
    background: ${({theme}: any) => theme.colors.white};
    @media(max-width: ${({theme}: any) => theme.devices.mobile}){
        margin: 30px 10px;
    }
`;

const CloseButton = styled(WrapperButton)`
    width: 18px;
    height: 18px;
    font-size: 18px;
    position: absolute;
    right: 19px;
    top: 19px;
    font-family: sans-serif;
`;

const Overlay = styled.div`
    position: fixed;
    background: rgba(0,0,0, .1);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
`;

interface Props {
    close: () => void;
    children: React.ReactElement
}


export const Popup = ({children, close}: Props) => {
    return (
        <Overlay>        
            <PopupContainer>
                <CloseButton aria-label="close" onClick={close}>×</CloseButton>
                {children}
            </PopupContainer>
        </Overlay>
    )
}