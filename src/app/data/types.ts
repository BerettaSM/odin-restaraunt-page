export interface InfoSectionData {
    title: string;
    description: string;
    image?: {
        src: string;
        alt: string;
    };
}

export interface SectionData {
    [k: string]: InfoSectionData;
}

export interface DishData {
    title: string;
    description: string;
    image: string;
}

export interface DishDataWithPrice extends DishData {
    price: number;
}
