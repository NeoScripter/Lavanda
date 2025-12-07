export interface FaqResource {
    data: FaqType[];
}

export interface FaqType {
    type: 'faq';
    id: number;
    attributes: {
        titleRu: string;
        titleEn: string;
        descriptionRu: string;
        descriptionEn: string;
    };
};
