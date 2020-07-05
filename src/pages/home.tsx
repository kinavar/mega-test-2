import React, {useState, useEffect, useRef, MutableRefObject} from 'react';

import {
    TopGroupWrapper,
    StyledSmallButton,
    IconWrapper,
    StyledWrappedButton,
    SearchContainer,
    BreadcrumbsContainer,
    ButtonContainer,
    StyledButton,
    StyledHeader,
    FilesContainer,
    StyledSuccessButton
} from './styles';
import {SuccessButton, SmallButton, WrapperButton} from '../components/buttons';
import {Popup} from '../components/popup';
import {SearchInput} from '../components/search-input';
import {Breadcrumbs} from '../components/breadcrumbs';
import {links, files, context, IFile} from '../dummy';
import {FileList} from '../components/file-list';
import {ContextMenu} from '../components/context-menu';
import {ContextLine} from '../components/context-menu/context-menu-line';
import {ReactComponent as ListIcon} from '../assets/images/list.svg';
import {ReactComponent as GroupIcon} from '../assets/images/group.svg';
import {ReactComponent as UploadIcon} from '../assets/images/upload.svg';
import {ReactComponent as NewFolderIcon} from '../assets/images/new-folder.svg';

export const HomePage = () => {
    const contextRef = useRef() as MutableRefObject<HTMLUListElement>
    const popupRef = useRef() as MutableRefObject<HTMLDivElement>;
    const [isOpen, setOpen] = useState(true);
    const [contextMenuOpen, setContextMenu] = useState(false);
    const [contextPosition, setPosition] = useState({x: 0, y: 0});
    const [searhResultFiles, setSearchResultFiles] = useState(files);

    useEffect(() => {
        const handleOutsideClick = (event :any) => {
            if (!contextRef.current.contains(event.target)) {
                setContextMenu(false); 
                document.removeEventListener('click', handleOutsideClick)
            }
        };

        const handleContextMenu = (event: MouseEvent) => {
            event.preventDefault();
            setContextMenu(true);
            setPosition({x: event.clientX, y: event.clientY})
            document.addEventListener('click', handleOutsideClick)
        };

        popupRef.current.addEventListener('contextmenu', handleContextMenu)

        return () => {
            popupRef.current.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('click', handleOutsideClick);
        }
    }, []);


    const close = () => {
        setOpen(false);
    };

    const open = () => {
        setOpen(true);
    };

    const filterFiles = (list: IFile[], value: string) => {
        if(value === '') {
            return list;
        };

        return list.filter(file => file.filename.toLowerCase().includes(value.toLowerCase()))
    };

    const search = (value: string) => {
        setSearchResultFiles(filterFiles(files, value))
    };

    return (
        <>
            <StyledSuccessButton onClick={open}>Open popup</StyledSuccessButton>
            {isOpen && 
                <Popup close={close} >
                    <div ref={popupRef}>
                        <StyledHeader>Files</StyledHeader>
                        <TopGroupWrapper>
                            <div>    
                                <StyledSmallButton>
                                    <IconWrapper>
                                        <NewFolderIcon />
                                    </IconWrapper>
                                    New Folder
                                </StyledSmallButton>
                                <SmallButton>
                                <IconWrapper>
                                    <UploadIcon />
                                </IconWrapper>
                                    Upload
                                </SmallButton>
                            </div>
                            <div>
                                <StyledWrappedButton><ListIcon/></StyledWrappedButton>
                                <WrapperButton><GroupIcon/></WrapperButton>
                            </div>
                        </TopGroupWrapper>
                        <SearchContainer>
                            <SearchInput search={search}></SearchInput>
                        </SearchContainer>
                        <BreadcrumbsContainer>
                            <Breadcrumbs links={links}></Breadcrumbs>
                        </BreadcrumbsContainer>
                        <FilesContainer>
                            <FileList files={searhResultFiles}/>
                        </FilesContainer>
                        <ButtonContainer>
                            <StyledButton onClick={close}>Cancel</StyledButton>
                            <SuccessButton>Copy to this folder</SuccessButton>
                        </ButtonContainer>
                        {contextMenuOpen && 
                            <ContextMenu {...contextPosition} ref={contextRef}>
                                {context.map(date => <ContextLine {...date}></ContextLine>)}
                            </ContextMenu>
                        }
                    </div>
                </Popup>
            }
        </>
    )
}