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
    users?: User[];
};
export type User = {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    created_at?: string;
    updated_at?: string;
    tiers?: Plan[];
};
export enum PlanTier {
    BASE = "base",
    STANDARD = "standard",
    PROFI = "profi"
}
