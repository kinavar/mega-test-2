import styled from '@emotion/styled'

export const Link = styled.a`
    color: ${({theme}: any) => theme.colors.grey};
    font: 400 ${({theme}: any) => theme.fonts.small} Lato, sans-serif;
    text-decoration: none;
`