import { Component, InfoSection } from '../components';
import { SECTIONS } from '../../data';

const { welcome, menu, specialEvents } = SECTIONS;

export class HomePage extends Component {
    create(): DocumentFragment {
        const self = document.createDocumentFragment();
        for (const section of [welcome, menu, specialEvents])
            new InfoSection(section).renderOn(self);
        return self;
    }
}
