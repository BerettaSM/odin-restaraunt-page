import { SectionData } from './types';

export const INFO = {
    name: 'Saffron Grove Bistro',
    address: {
        street: '123 Main Street',
        city: 'Cityville',
        state: 'Stateville',
        zip: '12345',
        country: 'United States',
    },
    phones: {
        main: '(555) 555-1234',
        reservation: '(555) 555-5678',
    },
    emails: {
        main: 'info@saffrongrovebistro.com',
        reservations: 'reservations@saffrongrovebistro.com',
    },
    openingHours: {
        tuesdays: '18:00 - 22:00',
        wednesdays: '18:00 - 22:00',
        thursdays: '18:00 - 22:00',
        fridays: '18:00 - 23:00',
        saturdays: '17:00 - 23:00',
        sundays: '17:00 - 22:00',
    },
};

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

export const DISHES = [
    {
        title: 'Truffle Risotto Delight',
        description:
            'Creamy Arborio rice cooked to perfection with aromatic truffle oil, finished with Parmesan cheese and a hint of freshly cracked black pepper.',
        image: 'truffle-risotto-delight.jpg',
    },
    {
        title: 'Seared Scallops with Citrus Glaze',
        description:
            'Tender scallops, delicately seared and served with a zesty citrus glaze, garnished with microgreens for a burst of freshness.',
        image: 'seared-scallops-with-citrus-glaze.jpg',
    },
    {
        title: 'Grilled Mediterranean Lamb Chops',
        description:
            'Succulent lamb chops marinated in Mediterranean spices, grilled to juicy perfection, and served with a side of roasted vegetables and tzatziki sauce.',
        image: 'grilled-mediterranean-lamb-chops.jpg',
    },
    {
        title: 'Wild Mushroom Tartlet',
        description:
            'Flaky puff pastry filled with a medley of wild mushrooms sautéed in garlic and thyme, topped with creamy goat cheese and a balsamic reduction drizzle.',
        image: 'wild-mushroom-tartlet.jpg',
    },
    {
        title: 'Citrus-Infused Beet Salad',
        description:
            'Vibrant roasted beets tossed with arugula, tangy goat cheese, and toasted walnuts, dressed in a citrus vinaigrette for a refreshing burst of flavor.',
        image: 'citrus-infused-beet-salad.jpg',
    },
    {
        title: 'Pan-Seared Duck Breast with Cherry Port Sauce',
        description:
            'Tender duck breast, pan-seared to crispy perfection and served with a rich cherry port sauce, accompanied by creamy mashed potatoes and sautéed green beans.',
        image: 'pan-seared-duck-breast-with-cherry-port-sauce.jpg',
    },
    {
        title: 'Grilled Vegetable Platter',
        description:
            'A colorful array of seasonal vegetables, grilled to perfection and served with a drizzle of balsamic glaze, perfect for vegetarians and veggie lovers alike.',
        image: 'grilled-vegetable-platter.jpg',
    },
    {
        title: 'Lobster Ravioli in Champagne Cream Sauce',
        description:
            'Homemade ravioli stuffed with succulent lobster meat, served in a luxurious champagne cream sauce, garnished with fresh chives for a touch of elegance.',
        image: 'lobster-ravioli-in-champagne-cream-sauce.jpg',
    },
    {
        title: 'Filet Mignon with Red Wine Reduction',
        description:
            'Tender filet mignon, grilled to your liking and served with a velvety red wine reduction, accompanied by garlic mashed potatoes and buttery asparagus spears.',
        image: 'filet-mignon-with-red-wine-reduction.jpg',
    },
    {
        title: 'Seafood Paella',
        description:
            'A Spanish-inspired delight featuring a medley of seafood, including shrimp, mussels, and clams, cooked with saffron-infused rice and aromatic spices.',
        image: 'seafood-paella.jpg',
    },
    {
        title: 'Caprese Bruschetta',
        description:
            'Crispy baguette slices topped with ripe tomatoes, fresh mozzarella, and basil chiffonade, finished with a drizzle of balsamic glaze for a burst of Mediterranean flavors.',
        image: 'caprese-bruschetta.jpg',
    },
    {
        title: 'Vegetable Ratatouille',
        description:
            'A hearty and comforting dish featuring a melange of seasonal vegetables, slow-cooked in a rich tomato sauce with fragrant herbs and garlic.',
        image: 'vegetable-ratatouille.jpg',
    },
    {
        title: 'Miso Glazed Chilean Sea Bass',
        description:
            'Tender Chilean sea bass, marinated in a savory miso glaze and oven-roasted to perfection, served atop a bed of sautéed baby bok choy.',
        image: 'miso-glazed-chilean-sea-bass.jpg',
    },
    {
        title: 'Butternut Squash Ravioli with Sage Brown Butter',
        description:
            'Pillowy ravioli filled with creamy butternut squash puree, tossed in a nutty sage brown butter sauce and sprinkled with toasted pine nuts.',
        image: 'butternut-squash-ravioli-with-sage-brown-butter.jpg',
    },
    {
        title: 'Chocolate Lava Cake',
        description:
            'Indulge your sweet tooth with this decadent chocolate lava cake, featuring a molten chocolate center that oozes out with every forkful, served with a scoop of vanilla bean ice cream.',
        image: 'chocolate-lava-cake.jpg',
    },
];

export const FAQS = [
    {
        question: 'Do you accommodate dietary restrictions or food allergies?',
        answer: "Yes, we strive to accommodate our guests' dietary needs and allergies to the best of our ability. Please inform your server of any dietary restrictions or allergies when making your reservation or placing your order, and we will do our utmost to provide suitable options.",
    },
    {
        question: 'Can I make a reservation online?',
        answer: 'Yes, we offer online reservation services for your convenience. Simply visit our website and navigate to the "Reservations" page to book your table. Alternatively, you can also call us directly at [phone number] to make a reservation over the phone.',
    },
    {
        question: 'Is your restaurant family-friendly?',
        answer: "Absolutely! We welcome guests of all ages at Saffron Grove Bistro. Our menu offers a variety of options suitable for children, and we also provide high chairs upon request. Whether you're celebrating a special occasion with the family or enjoying a casual meal, you'll feel right at home with us.",
    },
    {
        question: 'Do you offer private dining or event catering services?',
        answer: 'Yes, we offer private dining options for special events, celebrations, and corporate gatherings. Our dedicated events team will work with you to create a customized menu and ambiance tailored to your needs. Additionally, we provide catering services for off-site events. Please contact us for more information and to discuss your requirements.',
    },
];

export const TESTIMONIALS = [
    {
        title: 'An Unforgettable Culinary Journey',
        description:
            "Dining at Saffron Grove Bistro was an unforgettable experience! From the warm ambiance to the impeccable service and, of course, the exquisite food, every moment was a delight for the senses. Can't wait to return!",
    },
    {
        title: 'A Taste of Perfection',
        description:
            'I recently had the pleasure of dining at Saffron Grove Bistro, and I must say, it was a taste of perfection. Each dish was a work of art, beautifully presented and bursting with flavor. A must-visit for any food enthusiast!',
    },
    {
        title: 'Exceptional Service and Attention to Detail',
        description:
            'What sets Saffron Grove Bistro apart is not only its exceptional cuisine but also its service and attention to detail. The staff went above and beyond to ensure our dining experience was nothing short of extraordinary. Highly recommend!',
    },
    {
        title: 'A Hidden Gem Worth Discovering',
        description:
            'Saffron Grove Bistro is a hidden gem worth discovering! Tucked away in the heart of the city, this charming restaurant offers a culinary journey like no other. Prepare to be amazed by their creative dishes and welcoming atmosphere.',
    },
    {
        title: 'The Epitome of Fine Dining',
        description:
            "For anyone seeking the epitome of fine dining, look no further than Saffron Grove Bistro. From the moment you step through the door, you're transported to a world of elegance and sophistication. The flavors, the presentation, the ambiance - all simply perfection.",
    },

    {
        title: 'A Culinary Oasis in the City',
        description:
            'Saffron Grove Bistro is truly a culinary oasis in the city! Amidst the hustle and bustle, this restaurant stands out as a haven of exceptional cuisine and tranquil ambiance. Every visit is a delightful escape from the ordinary.',
    },
    {
        title: 'Exquisite Flavors, Impeccable Presentation',
        description:
            'I was blown away by the exquisite flavors and impeccable presentation at Saffron Grove Bistro. Each dish was a masterpiece, carefully crafted to tantalize the taste buds and satisfy the soul. A dining experience like no other!',
    },
    {
        title: 'Perfect for Every Occasion',
        description:
            "Whether it's a romantic date night, a family celebration, or a business lunch, Saffron Grove Bistro is perfect for every occasion. The elegant atmosphere, attentive service, and mouthwatering cuisine make it my go-to restaurant for special moments.",
    },

    {
        title: 'A Symphony of Tastes and Textures',
        description:
            'Dining at Saffron Grove Bistro is like experiencing a symphony of tastes and textures. Each bite is a harmonious blend of flavors, textures, and aromas that dance on the palate. Prepare to be enchanted!',
    },

    {
        title: 'Hospitality at Its Finest',
        description:
            "The hospitality at Saffron Grove Bistro is truly unmatched. From the moment you arrive until the moment you leave, you're treated like royalty. The staff's warmth and professionalism elevate the dining experience to new heights. Bravo!",
    },
];
