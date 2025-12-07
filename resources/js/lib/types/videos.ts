export interface VideoResource {
    data: VideoType[];
}

export interface VideoType {
    type: 'video';
    id: number;
    attributes: {
        url: string;
        titleRu: string;
        titleEn: string;
    };
    image?: {
        path: string;
        tinyPath: string;
        altRu: string;
        altEn: string;
    };
};
