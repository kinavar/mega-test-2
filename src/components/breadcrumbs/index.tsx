import React from 'react';
import styled from '@emotion/styled';
import {Link} from '../link'

interface Link {
    url?: string;
    copy: string
}

interface Props {
    links: Link[];
};

const StyledLink = styled(Link)`
    &:after {
        content: '〉';
        padding: 0 8px;
    }

    &:last-of-type:after {
        content: ''
    }
`;

export const Breadcrumbs = ({links}:Props) => {
    return (
        <>
            {
                links.map(link => 
                    <StyledLink key={link.url} href={link.url}>{link.copy}</StyledLink>
                )
            }
        </>
    )
    
}