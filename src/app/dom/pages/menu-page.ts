import { Component, Dish, Pagination, PageChangeEvent } from '../components';

import { getDishesWithPagination } from '../../data';
import { toStyledTitle } from '../helpers';

export class MenuPage extends Component {
    private dishesPerPage = 3;

    private pagination: Pagination;
    private dishesSection: HTMLElement;

    constructor(...children: Component[]) {
        super(...children);

        const { lastPage } = getDishesWithPagination({
            page: 1,
            dishesPerPage: this.dishesPerPage,
        });

        this.pagination = new Pagination({
            totalPages: lastPage,
            totalRenderedButtons: Math.min(lastPage, 5),
        });

        this.dishesSection = document.createElement('section');
        this.dishesSection.classList.add('menu-section');
    }

    create(): DocumentFragment {
        const self = document.createDocumentFragment();

        const title = document.createElement('h2');
        title.textContent = 'Menu';

        self.appendChild(toStyledTitle(title));
        self.appendChild(this.dishesSection);
        this.pagination.renderOn(self);

        this.setupListeners();

        window.dispatchEvent(
            new CustomEvent('page-change', { detail: { page: 1 } }),
        );

        return self;
    }

    private setupListeners() {
        window.addEventListener('page-change', this.onPageChange);
    }

    public cleanUp(): void {
        super.cleanUp();
        window.removeEventListener('page-change', this.onPageChange);
    }

    private onPageChange = function onPageChange(this: MenuPage, event: Event) {
        const { page } = (event as PageChangeEvent).detail;

        const { pageDishes: dishes } = getDishesWithPagination({
            dishesPerPage: this.dishesPerPage,
            page,
        });

        const menu = this.dishesSection;

        menu.innerHTML = '';
        dishes.forEach((dishData) => {
            const dish = new Dish(dishData);
            dish.renderOn(menu);
        });
    }.bind(this);
}
