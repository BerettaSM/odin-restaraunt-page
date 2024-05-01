import { Component } from './component';
import * as styles from './pagination.module.css';

interface PaginationButtonInfo {
    label: string;
    ariaLabel: string;
    ariaHidden?: boolean;
    status?: 'active' | 'disabled';
}

interface PaginationConfig {
    totalPages: number;
    totalRenderedButtons: number;
    eventTarget: Window | HTMLElement;
}

interface PageChangeEventPayload {
    page: number;
}

export class PageChangeEvent extends CustomEvent<PageChangeEventPayload> {}

export class Pagination extends Component {
    private prevButton: HTMLLIElement;
    private nextButton: HTMLLIElement;
    private buttons: HTMLLIElement[] = [];
    private innerButtonsList: HTMLUListElement;
    private outerButtonsList: HTMLUListElement;

    private currentPage: number;
    private config: PaginationConfig;

    constructor(config?: Partial<PaginationConfig>, ...children: Component[]) {
        super(...children);

        this.currentPage = 1;

        this.config = {
            totalRenderedButtons: 5,
            totalPages: 5,
            eventTarget: window,
            ...config,
        };

        if (this.config.totalPages < this.config.totalRenderedButtons) {
            throw new Error(
                'Total pages must be equal or greater than total rendered buttons.',
            );
        }

        this.prevButton = this.createPaginationButton({
            label: '«',
            ariaLabel: 'Previous',
            ariaHidden: true,
            status: 'disabled',
        });
        this.nextButton = this.createPaginationButton({
            label: '»',
            ariaLabel: 'Next',
            ariaHidden: true,
        });

        this.innerButtonsList = document.createElement('ul');
        this.innerButtonsList.classList.add(styles.numberedButtons);

        this.outerButtonsList = document.createElement('ul');
        this.outerButtonsList.classList.add(styles.buttonsList);

        this.setupListeners();
    }

    create(): HTMLElement | DocumentFragment {
        const self = document.createElement('nav');
        self.setAttribute('aria-label', 'Dish pagination');
        self.classList.add(styles.pagination);

        this.createButtons();

        this.outerButtonsList.appendChild(this.prevButton);
        this.outerButtonsList.appendChild(this.innerButtonsList);
        this.outerButtonsList.appendChild(this.nextButton);

        this.switchToPage(this.currentPage);

        self.append(this.outerButtonsList);
        return self;
    }

    private createButtons() {
        for (let i = 1; i <= this.config.totalPages; i++) {
            const label = i.toString();
            const info: PaginationButtonInfo = {
                label,
                ariaLabel: label,
            };
            if (i === this.currentPage) {
                info.status = 'active';
            }
            const button = this.createPaginationButton(info);
            this.buttons.push(button);
        }
    }

    private createPaginationButton({
        label,
        ariaLabel,
        ariaHidden,
        status,
    }: PaginationButtonInfo) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const span = document.createElement('span');

        li.classList.add('clickable', styles.button);

        a.setAttribute('href', '#');
        a.setAttribute('aria-label', ariaLabel);

        if (status == 'active') {
            li.classList.add(styles.active);
        } else if (status == 'disabled') {
            li.classList.add(styles.disabled);
        }

        if (ariaHidden) {
            span.setAttribute('aria-hidden', 'true');
        }

        span.textContent = label;

        a.appendChild(span);
        li.appendChild(a);

        a.addEventListener('click', (event) => event.preventDefault());

        return li;
    }

    private switchToPage(page: number) {
        if (page < 1 || page > this.buttons.length) {
            throw new Error('Invalid page number.');
        }

        this.buttons[this.currentPage - 1].classList.remove(styles.active);
        this.buttons[page - 1].classList.add(styles.active);
        this.currentPage = page;

        if (this.currentPage === 1) {
            this.prevButton.classList.add(styles.disabled);
        } else {
            this.prevButton.classList.remove(styles.disabled);
        }

        if (this.currentPage === this.buttons.length) {
            this.nextButton.classList.add(styles.disabled);
        } else {
            this.nextButton.classList.remove(styles.disabled);
        }

        const totalButtons = this.buttons.length;
        const { totalRenderedButtons, eventTarget } = this.config;
        const maxViableFirstButton = totalButtons - totalRenderedButtons + 1;
        const buttonsAround = Math.floor(totalRenderedButtons / 2);
        const firstShownButton = Math.min(
            Math.max(this.currentPage - buttonsAround, 1),
            maxViableFirstButton,
        );
        const lastShownButton = Math.min(
            firstShownButton + totalRenderedButtons - 1,
            totalButtons,
        );

        this.renderButtons(firstShownButton, lastShownButton);
        eventTarget.dispatchEvent(
            new CustomEvent('page-change', { detail: { page } }),
        );
    }

    private renderButtons(first: number, last: number) {
        this.innerButtonsList.innerHTML = '';

        for (let i = first; i <= last; i++) {
            this.innerButtonsList.appendChild(this.buttons[i - 1]);
        }
    }

    private setupListeners() {
        this.outerButtonsList.addEventListener(
            'click',
            this.onPaginationClick.bind(this),
        );
    }

    private onPaginationClick(event: MouseEvent) {
        const target = (event.target as HTMLElement).closest('li');

        if (
            !target ||
            target.classList.contains(styles.disabled) ||
            target.classList.contains(styles.active)
        ) {
            return;
        }

        const index = this.buttons.indexOf(target);
        let page: number;

        if (index !== -1) {
            page = index + 1;
        } else {
            page = this.currentPage + (target === this.prevButton ? -1 : 1);
        }

        this.switchToPage(page);
    }
}
