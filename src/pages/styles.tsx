import styled from '@emotion/styled';
import {css} from '@emotion/core';
import {Button, SmallButton, WrapperButton, SuccessButton} from '../components/buttons';

export const sectionStyle = css`
    padding-right: 32px;
    padding-left: 36px;
`;

export const StyledHeader = styled.h1`
    ${sectionStyle};
    font: bold ${({theme}:any) => theme.fonts.main}/1.5 Lato;
    text-transform: uppercase;
    margin: 0 auto 32px;
`;

export const ButtonContainer = styled.div`
    ${sectionStyle};
    display: flex;
    justify-content: flex-end;
`;

export const StyledButton = styled(Button)`
    margin-right: 12px;
`;

export const TopGroupWrapper = styled.div`
    ${sectionStyle};
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
`;

export const StyledSmallButton = styled(SmallButton)`
    margin-right: 12px;
`;

export const StyledWrappedButton = styled(WrapperButton)`
    margin-right: 8px;
`;

export const SearchContainer = styled.div`
    ${sectionStyle};
    margin-bottom: 20px;
`;

export const BreadcrumbsContainer = styled.div`
    ${sectionStyle};
    margin-bottom: 22px;
`;

export const FilesContainer = styled.div`
    margin-bottom: 32px;
    flex-basis: 88px;
    flex-shrink: 1;
`;

export const IconWrapper = styled.i`
    float: left;
    margin-right: 8px;
`;

export const StyledSuccessButton = styled(SuccessButton)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
`;