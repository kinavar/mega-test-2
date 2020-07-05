import {keyframes, css} from '@emotion/core';


export const extend = keyframes`
    from {
        transform: scaleY(0);
    }

    to {
        transform: scaleY(1);

    }
`;

export const slideAnimation = css`
    animation: ${extend} .1s linear;
    transform-origin: center top;
`
