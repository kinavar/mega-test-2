import React, {useState, useRef, useEffect, MutableRefObject} from 'react';
import {useTheme} from 'emotion-theming';

import {File} from './file';
import {
    FileGroup, 
    OwnerGroup,
    AccessGroup,
    StyledHeader,
    StyledWrapperButton,
    FilesContainer,
    FileWrapper,
    StyledBadge,
    StyledDropdownMenu,
    StyledList
} from './styles';
import {useDropdownState} from '../dropdown-menu';
import {Line} from '../dropdown-menu/dropdown-line';
import {IFile, ContentTypes} from '../../dummy';

const contentTypeName = {
    [ContentTypes.all]: 'All content',
    [ContentTypes.contacts]: 'Contacts',
    [ContentTypes.payment]: 'Incoming Shares',
    [ContentTypes.shares]: 'Payment',
    [ContentTypes.takedown]: 'Takedown'
}

interface Props {
    files: IFile[];
};

export const FileList = ({files}: Props) => {
    const theme:any = useTheme();
    const dropdownRef = useRef() as MutableRefObject<HTMLDivElement>;
    const [selected, setSelected] = useState('');
    const [dropdownState, setDropdownState] = useDropdownState(dropdownRef);
    const [contentValue, setContentValue] = useState(ContentTypes.all);
    const [sortedFiles, setSortedFiles] = useState(files);

    const handleDropdownOpen = () => {
        setDropdownState(true);
    };

    useEffect(() => {
        setDropdownState(false);
        setSortedFiles(sortFiles(files, contentValue));
    }, [contentValue, files]);

    const sortFiles = (files: IFile[], value: ContentTypes) => {
        if (value === ContentTypes.all) {
            return files;
        };

        return files.filter(file => file.type === value);
    }

    const getContentTypeAmount = (type: ContentTypes) => {
        if(type === ContentTypes.all) {
            return files.length;
        };

        return sortedFiles.filter(file => file.type === type).length;
    }

    return (
        <div>
            <StyledHeader>
                <FileGroup>
                    <StyledWrapperButton onClick={handleDropdownOpen}>{contentTypeName[contentValue]}</StyledWrapperButton>
                        {dropdownState &&
                            <StyledDropdownMenu ref={dropdownRef}>
                                <StyledList>
                                    <Line
                                        handler={setContentValue} 
                                        value={ContentTypes.all}
                                        active={ContentTypes.all === contentValue} 
                                        amount={getContentTypeAmount(ContentTypes.all)}
                                    ></Line>
                                    <Line
                                        color={theme.colors.green}
                                        handler={setContentValue} 
                                        value={ContentTypes.contacts}
                                        active={ContentTypes.contacts === contentValue}
                                        amount={getContentTypeAmount(ContentTypes.contacts)}
                                    ></Line>
                                    <Line
                                        color={theme.colors.yellow}
                                        handler={setContentValue} 
                                        value={ContentTypes.shares}
                                        active={ContentTypes.shares === contentValue} 
                                        amount={getContentTypeAmount(ContentTypes.shares)}
                                    ></Line>
                                    <Line
                                        color={theme.colors.yellow}
                                        handler={setContentValue} 
                                        value={ContentTypes.payment}
                                        active={ContentTypes.payment === contentValue} 
                                        amount={getContentTypeAmount(ContentTypes.payment)}
                                    ></Line>
                                    <Line
                                        color={theme.colors.red}
                                        handler={setContentValue} 
                                        value={ContentTypes.takedown}
                                        active={ContentTypes.takedown === contentValue} 
                                        amount={getContentTypeAmount(ContentTypes.takedown)}
                                    ></Line>
                                </StyledList>
                            </StyledDropdownMenu>
                        }
                </FileGroup>
                <OwnerGroup>
                    <StyledWrapperButton>
                        Owner
                        <StyledBadge>{files.length}</StyledBadge>
                    </StyledWrapperButton>
                </OwnerGroup>
                <AccessGroup>Access</AccessGroup>
            </StyledHeader>
            <FilesContainer>
                {sortedFiles.map(file => (
                    <FileWrapper
                        onClick={() => setSelected(file.id)}
                        key={file.id}
                        selected={selected === file.id}
                        disabled={file.disabled}
                    >
                        <File {...file}></File>
                    </FileWrapper>
                ))}
            </FilesContainer>
        </div>
    ) 
};