/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
    introHeader: {
        id: 'app.components.HomePage.intro.header',
        defaultMessage: 'Paulo\'s Homepage',
    },
    introBody: {
        id: 'app.components.HomePage.intro.body',
        defaultMessage: `
        A playground and starter kit for quickly creating and deploying scalable websites
        with well stocked, dynamic features that can easily be hooked up to data backing
        services. Components are built and styled with React and CSS, but future changes
        may include optional MaterialUI patterns.
        `,
    },
    headerHeader: {
        id: 'app.components.HomePage.header.header',
        defaultMessage: `
        Header, Menus and Banners
        `,
    },
    headerBody: {
        id: 'app.components.HomePage.header.body',
        defaultMessage: `
        Utility for implementing horizontal menus, banners with an image or styled
        object. These links work! Explore them for the relevant features or scroll down
        to see more examples.
        `,
    },
    listHeader: {
        id: 'app.components.HomePage.list.header',
        defaultMessage: `
        Lists and Columns
        `,
    },
    listBody: {
        id: 'app.components.HomePage.list.body',
        defaultMessage: `
        Static lists, scrolling lists, interactive lists and data driven columns.
        `,
    },
});
