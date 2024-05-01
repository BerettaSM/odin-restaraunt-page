import '../styles/global.css';
import { toStyledTitle } from './dom/helpers';
import { AboutPage, HomePage, MenuPage } from './dom/pages';

{
    // Select all styled titles and apply
    // span to words for styling.
    const titles = document.querySelectorAll(
        'h1,h2,h3,h4,h5,h6',
    ) as NodeListOf<HTMLHeadingElement>;
    titles.forEach((title) => title.replaceWith(toStyledTitle(title)));
}

{
    const contentArea = document.getElementById('content')!;
    const nav = document.getElementById('nav')!;
    const navButtons = Array.from(nav.querySelectorAll('button'));
    const [homeButton, menuButton, aboutButton] = navButtons;

    let curPage: AboutPage | HomePage | MenuPage | undefined;

    const pageMapping = new Map([
        [homeButton, HomePage],
        [menuButton, MenuPage],
        [aboutButton, AboutPage],
    ]);

    navButtons.forEach((navButton) => {
        navButton.addEventListener('click', () => {
            navButtons.forEach((navButton) => {
                navButton.classList.remove('active');
                navButton.disabled = false;
            });
            navButton.classList.add('active');
            navButton.disabled = true;
            contentArea.innerHTML = '';
            curPage?.cleanUp();
            const Page = pageMapping.get(navButton)!;
            curPage = new Page();
            curPage!.renderOn(contentArea);
        });
    });

    homeButton.click();
}
