import { getRandomNumber } from '../../utils';
import { DishData, DishDataWithPrice, SectionData } from './types';

export const SECTIONS: SectionData = {
    welcome: {
        title: 'Welcome',
        description:
            'Welcome to Saffron Grove Bistro, where culinary excellence meets refined dining experience. Nestled in the heart of Cityville, our restaurant offers a fusion of international flavors crafted with locally sourced ingredients. From our carefully curated menu to our elegant ambiance, every aspect of Saffron Grove Bistro is designed to delight your senses and elevate your dining experience.',
        image: {
            src: 'assets/images/restaurant-2.jpg',
            alt: 'Chefs meticulously setting up dishes.',
        },
    },
    menu: {
        title: 'Our Menu',
        description:
            "Explore our exquisite menu, meticulously prepared by our talented chefs to tantalize your taste buds. From delectable appetizers to mouthwatering entrees and decadent desserts, each dish at Saffron Grove Bistro is a masterpiece of flavor and presentation. Whether you're craving classic favorites or adventurous creations, there's something for every palate on our menu.",
        image: {
            src: 'assets/images/restaurant-3.jpg',
            alt: 'Close up shot of a fancy dish.',
        },
    },
    specialEvents: {
        title: 'Special Events',
        description:
            "Join us for special events and culinary experiences at Saffron Grove Bistro. From wine tastings and chef's specials to seasonal celebrations, we invite you to indulge in unforgettable moments of gastronomic delight with us.",
        image: {
            src: 'assets/images/restaurant-4.jpg',
            alt: 'Server preparing tables.',
        },
    },
    reservations: {
        title: 'Reservations',
        description:
            "Make a reservation at Saffron Grove Bistro to secure your table for an unforgettable dining experience. Whether you're planning a romantic dinner for two, a family celebration, or a corporate gathering, our team is here to ensure every detail is perfect.",
    },
    contactUs: {
        title: 'Contact Us',
        description:
            "Have questions or want to learn more about Saffron Grove Bistro? Contact our friendly staff, and we'll be happy to assist you. You can reach us by phone, email, or visit us in person at our convenient location in 123 Main Street.",
    },
    followUs: {
        title: 'Follow Us',
        description:
            'Stay updated on the latest news, events, and promotions at Saffron Grove Bistro by following us on social media. Connect with us on Facebook, Instagram, and Twitter for mouthwatering photos, behind-the-scenes glimpses, and exclusive offers.',
    },
};

export const DISHES: DishData[] = [
    {
        title: 'Truffle Risotto Delight',
        description:
            'Creamy Arborio rice cooked to perfection with aromatic truffle oil, finished with Parmesan cheese and a hint of freshly cracked black pepper.',
        image: 'assets/images/truffle-risotto-delight.jpg',
    },
    {
        title: 'Seared Scallops with Citrus Glaze',
        description:
            'Tender scallops, delicately seared and served with a zesty citrus glaze, garnished with microgreens for a burst of freshness.',
        image: 'assets/images/seared-scallops-with-citrus-glaze.jpg',
    },
    {
        title: 'Grilled Mediterranean Lamb Chops',
        description:
            'Succulent lamb chops marinated in Mediterranean spices, grilled to juicy perfection, and served with a side of roasted vegetables and tzatziki sauce.',
        image: 'assets/images/grilled-mediterranean-lamb-chops.jpg',
    },
    {
        title: 'Wild Mushroom Tartlet',
        description:
            'Flaky puff pastry filled with a medley of wild mushrooms sautéed in garlic and thyme, topped with creamy goat cheese and a balsamic reduction drizzle.',
        image: 'assets/images/wild-mushroom-tartlet.jpg',
    },
    {
        title: 'Citrus-Infused Beet Salad',
        description:
            'Vibrant roasted beets tossed with arugula, tangy goat cheese, and toasted walnuts, dressed in a citrus vinaigrette for a refreshing burst of flavor.',
        image: 'assets/images/citrus-infused-beet-salad.jpg',
    },
    {
        title: 'Pan-Seared Duck Breast with Cherry Port Sauce',
        description:
            'Tender duck breast, pan-seared to crispy perfection and served with a rich cherry port sauce, accompanied by creamy mashed potatoes and sautéed green beans.',
        image: 'assets/images/pan-seared-duck-breast-with-cherry-port-sauce.jpg',
    },
    {
        title: 'Grilled Vegetable Platter',
        description:
            'A colorful array of seasonal vegetables, grilled to perfection and served with a drizzle of balsamic glaze, perfect for vegetarians and veggie lovers alike.',
        image: 'assets/images/grilled-vegetable-platter.jpg',
    },
    {
        title: 'Lobster Ravioli in Champagne Cream Sauce',
        description:
            'Homemade ravioli stuffed with succulent lobster meat, served in a luxurious champagne cream sauce, garnished with fresh chives for a touch of elegance.',
        image: 'assets/images/lobster-ravioli-in-champagne-cream-sauce.jpg',
    },
    {
        title: 'Filet Mignon with Red Wine Reduction',
        description:
            'Tender filet mignon, grilled to your liking and served with a velvety red wine reduction, accompanied by garlic mashed potatoes and buttery asparagus spears.',
        image: 'assets/images/filet-mignon-with-red-wine-reduction.jpg',
    },
    {
        title: 'Seafood Paella',
        description:
            'A Spanish-inspired delight featuring a medley of seafood, including shrimp, mussels, and clams, cooked with saffron-infused rice and aromatic spices.',
        image: 'assets/images/seafood-paella.jpg',
    },
    {
        title: 'Caprese Bruschetta',
        description:
            'Crispy baguette slices topped with ripe tomatoes, fresh mozzarella, and basil chiffonade, finished with a drizzle of balsamic glaze for a burst of Mediterranean flavors.',
        image: 'assets/images/caprese-bruschetta.jpg',
    },
    {
        title: 'Vegetable Ratatouille',
        description:
            'A hearty and comforting dish featuring a melange of seasonal vegetables, slow-cooked in a rich tomato sauce with fragrant herbs and garlic.',
        image: 'assets/images/vegetable-ratatouille.jpg',
    },
    {
        title: 'Miso Glazed Chilean Sea Bass',
        description:
            'Tender Chilean sea bass, marinated in a savory miso glaze and oven-roasted to perfection, served atop a bed of sautéed baby bok choy.',
        image: 'assets/images/miso-glazed-chilean-sea-bass.jpg',
    },
    {
        title: 'Butternut Squash Ravioli with Sage Brown Butter',
        description:
            'Pillowy ravioli filled with creamy butternut squash puree, tossed in a nutty sage brown butter sauce and sprinkled with toasted pine nuts.',
        image: 'assets/images/butternut-squash-ravioli-with-sage-brown-butter.jpg',
    },
    {
        title: 'Chocolate Lava Cake',
        description:
            'Indulge your sweet tooth with this decadent chocolate lava cake, featuring a molten chocolate center that oozes out with every forkful, served with a scoop of vanilla bean ice cream.',
        image: 'assets/images/chocolate-lava-cake.jpg',
    },
];

export function getDishes(): DishDataWithPrice[] {
    return DISHES.map((dish) => ({
        ...dish,
        price: getRandomNumber(3500, 12000) / 100,
    }));
}

type PaginationConfig = {
    page: number;
    dishesPerPage: number;
};

export function getDishesWithPagination(paginationConfig: PaginationConfig) {
    const { page, dishesPerPage } = paginationConfig;
    const dishes = getDishes();
    const total = dishes.length;
    const lastPage = Math.max(Math.ceil(total / dishesPerPage), 1);

    if (page < 1 || page > lastPage) {
        throw new Error('Invalid page number.');
    }

    const start = (page - 1) * dishesPerPage;
    const end = start + dishesPerPage;
    const pageDishes = dishes.slice(start, end);

    return { page, lastPage, dishesPerPage, pageDishes };
}
