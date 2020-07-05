import React from 'react';
import styled from '@emotion/styled';

import {WrapperButton} from '../../buttons';
import { ContentTypes } from '../../../dummy';

export const Option = styled('li')<{active: boolean, color?: string}>({
    lineHeight: '22px',
    padding: '5px 0',
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '13px',
    position: 'relative',  
    '&:first-of-type':  {
        paddingBottom: '13px',
        borderBottom: '1px solid rgba(0,0,0, .1)'
    }

},
(props:any) => ({
    '&:before': {
        content: `''`,
        width: '6px',
        height: '6px',
        borderRadius: '3px',
        backgroundColor: `${props.color}`,
        position: 'absolute',
        left: '0',
        top: '50%',
        marginTop: '-3px'

    },
    button: {
        marginRight: '20px',
        font: `${props.active ? 'bold' : 'normal'} ${props.theme.fonts.main} Lato,sans-serif`,
        color: `${props.active ? props.theme.colors.charcoal: props.theme.colors.grey}`
    }
}));

export const SmallBadge = styled.span`
    display: inline-block;
    border-radius: 4px;
    height: 14px;
    padding: 0 3px;
    line-height: 14px;
    color: ${({theme}: any) => theme.colors.white};
    background: ${({theme}:any) => theme.colors.lightRed};
    font: ${({theme}:any) => theme.fonts.tiny} Lato,sans-serif;
`;

interface Props {
    color?: string;
    value: ContentTypes;
    handler: (value: ContentTypes) => void;
    active: boolean;
    amount: string | number;
};

export const Line = ({color, value, handler, active, amount}:Props) => {
    return (
        <Option 
            color={color}
            active={active}
        >
            <WrapperButton onClick={() => handler(value)}>
                {value}
            </WrapperButton>
            {Boolean(amount) && <SmallBadge>{amount}</SmallBadge>}   
        </Option>
    )
}
