export type ExperienceItem = {
    id: number;
    title: string;
    description: string;
    heading: string;
    body: string;
    html: string;
    created_at?: string;
    updated_at?: string;
    image?: Image;
};
export type Image = {
    id: number;
    path: string;
    tiny_path: string;
    alt: string;
    imageable_type: string;
    imageable_id: number;
    type: string;
    created_at?: string;
    updated_at?: string;
    imageable?: any;
};
export type Plan = {
    id: number;
    title: string;
    tier: PlanTier;
    durationInDays: number;
    price: number;
    perks: string;
    created_at?: string;
    updated_at?: string;
    human_duration: any;
};
export type WellnessTip = {
    id: number;
    type: WellnessTipType;
    description: string;
    url: string;
    created_at?: string;
    updated_at?: string;
    image?: Image;
};
export enum PlanTier {
    BASE = "base",
    STANDARD = "standard",
    PROFI = "profi"
}
export enum WellnessTipType {
    TOOLKIT = "toolkit",
    RELAXATION = "relaxation"
}
