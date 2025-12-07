export interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
    telegram: string;
    banned: boolean;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}
