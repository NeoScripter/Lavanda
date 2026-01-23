import { User } from "@/lib/types";

export type Auth = {
    user: User | null;
    hasPremiumAccess: boolean;
}
