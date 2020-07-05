export const links = [
    {
        url: '/files',
        copy: 'My files'
    },
    {
        url: '/files/folder',
        copy: 'Folder namel ni;a ssseifna nei'
    },
    {
        copy: 'Folder namel ni;a ssseifna nei'
    }
];

export interface Context {
    name: string;
    icon: string;
    link: string;
}

export const context: Context[] = [
    {
        name: 'About',
        icon: require('./assets/images/Icon/about/about.svg'),
        link: '#'
    },
    {
        name: 'MEGA website',
        icon: require('./assets/images/Icon/website/website.svg'),
        link: '#'
    },
    {
        name: 'Cloud drive',
        icon: require('./assets/images/Icon/Sync/sync.svg'),
        link: '#'
    },
    {
        name: 'Import links',
        icon: require('./assets/images/Icon/Link/link.svg'),
        link: '#'
    },
    {
        name: 'Upload',
        icon: require('./assets/images/Icon/Upload/upload.svg'),
        link: '#'
    },
    {
        name: 'Download',
        icon: require('./assets/images/Icon/Download/download.svg'),
        link: '#'
    },
    {
        name: 'Stream',
        icon: require('./assets/images/Icon/Stream/stream.svg'),
        link: '#'
    },
    {
        name: 'Preferences',
        icon: require('./assets/images/Icon/Preferences/preferences.svg'),
        link: '#'
    },
    {
        name: 'Quit',
        icon: require('./assets/images/Icon/Quit/quit.svg'),
        link: '#'
    }
];

export interface IFile {
    id: string;
    filename: string;
    date: string;
    owner: string;
    icon: string;
    access?: string;
    disabled?: boolean;
    type: string;
}; 

export enum ContentTypes {
    all = 'all',
    contacts = 'contacts',
    shares = 'shares',
    payment = 'payment',
    takedown = 'takedown'
}

export const files: IFile[] = [
    {
        id: '1',
        date: '2020-12-16',
        filename: 'Global-Peace-Index….pdf',
        icon: require('./assets/images/pdf.svg'),
        owner: 'Honey Meada',
        access: '',
        type: ContentTypes.contacts
    },
    {
        id: '2',
        date: '2020-12-16',
        filename: 'Global-Peace-Index….pdf',
        icon: require('./assets/images/folder.svg'),
        owner: 'Honey Meada',
        access: 'Full access',
        type: ContentTypes.payment
     },
     {
        id: '3',
        date: '2020-12-16',
        filename: 'Sotirea-sianlaisen.png',
        icon: require('./assets/images/png.svg'),
        owner: 'User Name',
        access: 'Full access',
        disabled: true,
        type: ContentTypes.payment
     },
     {
        id: '4',
        date: '2020-12-16',
        filename: 'Global-Peace-Index….pdf',
        icon: require('./assets/images/folder.svg'),
        owner: 'Honey Meada',
        access: 'Full access',
        type: ContentTypes.takedown
     },
     {
        id: '5',
        date: '2020-12-16',
        filename: 'Global-Peace-Index….pdf',
        icon: require('./assets/images/pdf.svg'),
        owner: 'Honey Meada',
        access: '',
        type: ContentTypes.shares
    },
    {
        id: '6',
        date: '2020-12-16',
        filename: 'Global-Peace-Index….pdf',
        icon: require('./assets/images/folder.svg'),
        owner: 'Honey Meada',
        access: 'Full access',
        type: ContentTypes.shares
     },
     {
        id: '7',
        date: '2020-12-16',
        filename: 'Sotirea-sianlaisen.png',
        icon: require('./assets/images/png.svg'),
        owner: 'User Name',
        access: 'Full access',
        disabled: true,
        type: ContentTypes.takedown
     },
];
