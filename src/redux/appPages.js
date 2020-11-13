import strings from '../assets/strings';

export const APP_PAGES = [
    {
        href: 'me',
        text: strings.navigation.me
    },
    {
        href: 'work',
        text: strings.navigation.work
    },
    {
        href: 'education',
        text: strings.navigation.education
    },
    {
        href: 'skills',
        text: strings.navigation.skills
    }
];

export const getNextPageInfo = (page) => {
    let nextPage;
    let nextPageName;

    switch (page) {
        case APP_PAGES[1].href:
            nextPage = APP_PAGES[2].href;
            nextPageName = APP_PAGES[2].text;
            break;
        case APP_PAGES[2].href:
            nextPage = APP_PAGES[3].href;
            nextPageName = APP_PAGES[3].text;
            break;
        case strings.navigation.skills:
            return '';
        case APP_PAGES[0].href:
        default:
            nextPage = APP_PAGES[1].href;
            nextPageName = APP_PAGES[1].text;
    }
    
    return {
        nextPage,
        nextPageName
    }
}