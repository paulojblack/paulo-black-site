/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
    introHeader: {
        id: 'app.components.HomePage.intro.header',
        defaultMessage: 'Paulo Black',
    },
    introBody: {
        id: 'app.components.HomePage.intro.body',
        defaultMessage: `
        Full Stack Web Developer specializing in enterprise scale API design, front end
        design with React.js. I'm primarily interested in modern web architecture and infrastructure, DevOps
        culture, development tooling, distributed systems and task, build and deployment automation.
        To get in touch about private contracting, open source collaboration, or just to say hi, don't
        hesitate to get in touch with me via Github, Linkedin, or email!
        `,
    },
});
