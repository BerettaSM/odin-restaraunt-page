import '../styles/global.css';

{
    // Select all styled titles and apply
    // span to words for styling.
    const titles = document.querySelectorAll('.styled-title');
    titles.forEach((title) => {
        if (!title.textContent) {
            return;
        }
        title.innerHTML = title.textContent
            .trim()
            .split(' ')
            .map((word) => `<span>${word}</span>`)
            .join('');
    });
}
