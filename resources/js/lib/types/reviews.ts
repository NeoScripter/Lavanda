export interface ReviewResource {
    data: ReviewType[];
}

export interface ReviewType {
    type: 'review';
    id: number;
    attributes: {
        authorRu: string;
        authorEn: string;
        descriptionRu: string;
        descriptionEn: string;
    };
    image?: {
        path: string;
        tinyPath: string;
        altRu: string;
        altEn: string;
    };
};
