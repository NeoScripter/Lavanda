export interface StackResource {
    data: StackType[];
}

export interface StackType {
    type: 'stack';
    id: number;
    attributes: {
        htmlRu: string;
        htmlEn: string;
        image: string;
    };
};
