import { Renderable } from '../types';

export abstract class Component implements Renderable {
    protected children: Component[] = [];

    constructor(...children: Component[]) {
        this.children.push(...children);
    }

    abstract create(): HTMLElement | DocumentFragment;

    renderOn(target: HTMLElement | DocumentFragment): void {
        const self = this.create();
        this.children.forEach((child) => child.renderOn(self));
        target.appendChild(self);
    }

    cleanUp() {
        this.children.forEach((c) => c.cleanUp());
    }
}
