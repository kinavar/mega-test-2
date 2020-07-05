import React from 'react';
import styled from '@emotion/styled';


const Line = styled.li`
    padding: 4px 16px;
    &:nth-child(3) {
        border-bottom: 1px solid rgba(0,0,0, .1);
        padding-bottom: 12px;
        margin-bottom: 8px; 
    }

    &:nth-last-child(1) {
        border-top: 1px solid rgba(0,0,0, .1);
        padding-top: 12px;
        margin-top: 8px; 
    }
`;

const IconWrapper = styled.div`
    width: 36px;
    height: 36px;
    img {
        max-width: 100%;
    }
`;

const Link = styled.a`
    text-decoration: none;
    font: ${({theme}: any) => theme.fonts.small}/1.3 Lato, sans-serif;
    color: ${({theme}: any) => theme.colors.charcoal};
    display: flex;
    line-height: 36px;
    cursor: pointer;
`;

interface Props {
    icon: string;
    name: string;
    link: string;
}

export const ContextLine = ({icon, name, link}: Props) => {
     return (
        <Line>
            <Link href={link}>
                <IconWrapper>
                    <img src={icon} alt={name}/>        
                </IconWrapper>
                {name}
            </Link>
        </Line>
     );
}