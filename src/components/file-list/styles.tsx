import styled from '@emotion/styled';
import {css} from '@emotion/core';

import {WrapperButton} from '../buttons';
import ArrowDown from '../../assets/images/icon_sort_down.png';
import {Badge} from '../badge';
import { DropdownMenu } from '../dropdown-menu';


export const font = (theme: any) => css({
    font: `${theme.fonts.main} Lato,sans-serif`,
    color: `${theme.colors.grey}`
});

export const StyledDropdownMenu = styled(DropdownMenu)`
    top: 100%;
    left: -24px; 
    z-index: 1;
`;

export const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-position: inside;
`;

export const FileGroup = styled.div`
    display: flex;
    min-width: 224px;
    flex-basis: 60%;
    position: relative;
`;

export const OwnerGroup = styled.div`
    min-width: 126px;
    flex-basis: 22%;
`;

export const AccessGroup = styled.div`
    ${({theme}) => font(theme)};
    min-width: 88px;
`;

export const rowPadding = css`
    padding-right: 32px;
    padding-left: 36px;
`;

export const FilesContainer = styled.div`
    min-height: 88px;
    transition: box-shadow .2s;
    max-height: 280px;
    overflow: hidden;
    &:hover {
        overflow: overlay;
        box-shadow: inset 0 1px 6px 0 rgba(0,0,0,0.1);
    };
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    };
    &::-webkit-scrollbar-track-piece:start {
      background: transparent;
    };
    &::-webkit-scrollbar-track-piece:end {
      background: transparent;
    };
    &::-webkit-scrollbar-thumb {
      background-color: ${({theme}: any) => theme.colors.scrollGrey};
      border-radius: 4px;
    };
`;

export const StyledHeader = styled.div`
    display: flex;
    ${rowPadding};
    margin-bottom: 14px;
`;

export const StyledWrapperButton = styled(WrapperButton)`
    ${({theme}) => font(theme)};
    padding-right: 16px;
    background: right 8px no-repeat url(${ArrowDown});
`;

export const StyledBadge = styled(Badge)`
    margin-left: 4px;
`;

//@ts-ignore
export const FileWrapper = styled('div')<{selected: boolean, disabled?: boolean, theme: any}>({
    ...rowPadding
},
    (props) => ({
        opacity: `${props.disabled ? .3 : 1}`,
        pointerEvents: `${props.disabled ? 'none' : 'auto'}`,
        transition: 'background-color .2s ease',
        ':hover': {
             backgroundColor: props.selected ? props.theme.colors.darkGrey : props.theme.colors.lightGrey
        },
        ':active': {
             backgroundColor: props.theme.colors.activeGrey  
        },
        '& *': {
            color: `${props.selected ? props.theme.colors.white: 'currentcolor'}`
        },
        backgroundColor: `${props.selected ? props.theme.colors.darkGrey : 'unset'}`
    })
);