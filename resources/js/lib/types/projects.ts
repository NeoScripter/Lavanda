export interface ProjectResource {
    data: ProjectType[];
}

export interface ProjectType {
    type: 'project';
    id: number;
    attributes: {
        titleRu: string;
        titleEn: string;
        descriptionRu: string;
        descriptionEn: string;
        link: string;
    };
    image?: {
        path: string;
        tinyPath: string;
        altRu: string;
        altEn: string;
    };
};
