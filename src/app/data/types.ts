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
