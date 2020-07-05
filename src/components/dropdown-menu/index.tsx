import styled from '@emotion/styled';
import {useState, useEffect, MutableRefObject} from 'react';
import {extend, slideAnimation} from '../../styles';


export const DropdownMenu = styled.div`
    border-radius: 4px;
    background: ${({theme}: any) => theme.colors.white};
    box-shadow: 0 1px 6px 0 rgba(0,0,0,0.2);
    padding: 8px;
    position: absolute;
    ${slideAnimation}
`;

export const useDropdownState = (dropdown: MutableRefObject<HTMLDivElement>) => {
    const [dropdownState, setDropdownState] = useState(false);

    useEffect(() => {
        function handleOutsideClick(event: any) {
            if(!dropdown.current.contains(event.target)) {
                setDropdownState(false);
            }
        };

        function unsubscribe() {
            document.removeEventListener('click', handleOutsideClick)
        };

        if(dropdownState) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            unsubscribe();
        }

        return () => {
            unsubscribe();
        } 
    }, [dropdownState])

    return [dropdownState, setDropdownState] as const

}