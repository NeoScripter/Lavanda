type OtpCode = {
    code: string | null;
    email: string;
};

export type Flash = {
    message: string | null;
    login: string | null;
    code: OtpCode | null;
    verifyEmail: string | null;
};
