import { Component, InfoSection } from '../components';
import { SECTIONS } from '../../data';

const { contactUs, followUs, reservations } = SECTIONS;

export class AboutPage extends Component {
    create(): DocumentFragment {
        const self = document.createDocumentFragment();
        for (const section of [contactUs, followUs, reservations])
            new InfoSection(section).renderOn(self);
        return self;
    }
}
