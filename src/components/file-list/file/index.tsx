import React from 'react';
import styled from '@emotion/styled';

import {FileGroup, OwnerGroup, AccessGroup} from '../styles';
import {IFile} from '../../../dummy';

const FileContainer = styled.div`
    display: flex;
    font: ${({theme}: any) => theme.fonts.main} Lato,sans-serif;
    color: ${({theme}: any) => theme.colors.charcoal};
    line-height: 20px;
    margin: 0; 
    padding: 7px 0; 
    border-bottom: 1px solid rgba(0,0,0, .05);
    height: 56px;
    box-sizing: border-box;
`;

const Icon = styled("div")<{icon: string}>({
        marginRight: '8px',
        height: '48px',
        width: '48px'  ,
        float: 'left'
    },
    (props) => ({
        background: `center top no-repeat url(${props.icon})`
    })
)
const FileDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const DateLine = styled.span` 
    font-size: ${({theme}: any) => theme.fonts.small};
    color: ${({theme}: any) => theme.colors.grey}
`;

export const File = ({filename, date, owner, access, icon}: IFile) => {
    return (
        <FileContainer>
            <FileGroup>
                <Icon icon={icon}></Icon>
                <FileDescriptionContainer>
                    <span>{filename}</span> 
                    <DateLine>{date}</DateLine>
                </FileDescriptionContainer>
            </FileGroup>
            <OwnerGroup>
                {owner}
            </OwnerGroup>
            <AccessGroup>
                {access}
            </AccessGroup>
        </FileContainer>
    )
}