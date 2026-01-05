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
export type Metaphoric = {
    id: number;
    name: string;
    body: string;
    html?: string;
    advice: string;
    created_at?: string;
    updated_at?: string;
    images?: Image;
    front_image?: Image;
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
export type PracticeItem = {
    id: number;
    title: string;
    description: string;
    heading: string;
    body: string;
    created_at?: string;
    updated_at?: string;
    image?: Image;
    faqs?: PracticeItemFaq[];
};
export type PracticeItemFaq = {
    id: number;
    practice_item_id: number;
    question: string;
    answer: string;
    created_at?: string;
    updated_at?: string;
    practice_item?: PracticeItem;
};
export type Promo = {
    id: number;
    name: string;
    body: string;
    html?: string;
    advice: string;
    created_at?: string;
    updated_at?: string;
    images?: Image;
    front_image?: Image;
};
export type Rune = {
    id: number;
    name: string;
    advice: string;
    created_at?: string;
    updated_at?: string;
    categories?: RuneCategory[];
    images?: Image;
    front_image?: Image;
    back_image?: Image;
};
export type RuneCategory = {
    id: number;
    rune_id: number;
    order: number;
    name: string;
    body: string;
    html: string;
    created_at?: string;
    updated_at?: string;
    rune?: Rune;
};
export type Tarot = {
    id: number;
    name: string;
    body: string;
    html?: string;
    advice: string;
    created_at?: string;
    updated_at?: string;
    images?: Image;
    front_image?: Image;
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
