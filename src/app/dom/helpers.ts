export function toStyledTitle(title: HTMLHeadingElement) {
    const text = title.textContent?.trim();
    if (!text) {
        return title;
    }
    const clone = title.cloneNode(true) as HTMLHeadingElement;
    clone.innerHTML = '';
    clone.classList.add('styled-title');
    text.split(' ')
        .map((word) => {
            const span = document.createElement('span');
            span.textContent = word;
            return span;
        })
        .forEach((span) => clone.append(span, ' '));
    return clone;
}
