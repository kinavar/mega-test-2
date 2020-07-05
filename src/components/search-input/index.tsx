import React, {useState} from 'react';
import styled from '@emotion/styled';

import {Input} from '../input';
import {WrapperButton} from '../buttons';

const Wrapper = styled.div`
    position: relative;
`;

const StyledButton = styled(WrapperButton)`
    height: 26px;
    width: 26px;
    border: 1px solid rgba(0,0,0,0.1);
    background-color: rgba(255,255,255,0.2);
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.1);
    position: absolute;
    border-radius: 100%;
    right: 4px;
    top: 4px;
    font-size: 11px;
    text-align: center;
    line-height: 26px;
`;

interface Props {
    search: (value: string) => void;
}

export const SearchInput = ({search}: Props) => {
    const [searchValue, setValue] = useState('');

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleSearch = () => {
        search(searchValue);
    };

    const handleEnterKey = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            search(searchValue);
        }
    }

    return (        
        <Wrapper>
            <Input type="text" aria-label="Search" value={searchValue} onChange={handleInput} onKeyDown={handleEnterKey}/>
            <StyledButton onClick={handleSearch} aria-label="Search">&#128269;</StyledButton>
        </Wrapper>
    )
}