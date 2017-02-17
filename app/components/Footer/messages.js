/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
    descriptionMessage: {
        id: 'boilerplate.components.Footer.license.message',
        defaultMessage: 'Oh boy a footer! It\'s not sticky though so cram in that content!',
    },
    authorMessage: {
        id: 'boilerplate.components.Footer.author.message',
        defaultMessage: `
          Made by {author}
        `,
    },
});
