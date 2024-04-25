import { Component } from './component';
import { toStyledTitle } from '../helpers';
import { InfoSectionData } from '../../data/types';
import * as styles from './info-section.module.css';

export class InfoSection extends Component {
    constructor(
        private data: InfoSectionData,
        ...children: Component[]
    ) {
        super(...children);
    }

    create(): HTMLElement {
        const self = document.createElement('div');
        const details = document.createElement('div');
        const description = document.createElement('p');

        let title = document.createElement('h2');

        self.classList.add(styles['info-section']);
        details.classList.add(styles['details']);

        title.textContent = this.data.title;
        description.textContent = this.data.description;

        title = toStyledTitle(title);

        details.appendChild(title);
        details.appendChild(description);
        self.appendChild(details);

        if (this.data.image) {
            const image = document.createElement('div');
            const img = document.createElement('img');

            image.classList.add(styles.image);

            img.src = this.data.image.src;
            img.alt = this.data.image.alt;

            image.appendChild(img);
            self.appendChild(image);
        }

        return self;
    }
}
