import { Component } from './component';
import { toStyledTitle } from '../helpers';
import { formatCurrency } from '../../../utils';
import { DishDataWithPrice } from '../../data/types';
import * as styles from './dish.module.css';

export class Dish extends Component {
    constructor(
        private data: DishDataWithPrice,
        ...children: Component[]
    ) {
        super(...children);
    }

    create(): HTMLElement | DocumentFragment {
        const self = document.createElement('article');
        const image = document.createElement('div');
        const img = document.createElement('img');
        const info = document.createElement('div');
        let title = document.createElement('h3');
        const description = document.createElement('p');
        const price = document.createElement('p');

        self.classList.add(styles.dish);
        image.classList.add(styles.image);
        info.classList.add(styles.info);
        title.classList.add(styles.title, 'multi-line-ellipsis', 'single-line');
        description.classList.add(styles.description, 'multi-line-ellipsis');
        price.classList.add(styles.price);

        img.src = this.data.image;
        title.textContent = this.data.title;
        description.textContent = this.data.description;
        price.textContent = formatCurrency(this.data.price);

        title = toStyledTitle(title);

        image.appendChild(img);
        info.appendChild(title);
        info.appendChild(description);
        info.appendChild(price);
        self.appendChild(image);
        self.appendChild(info);

        return self;
    }
}
