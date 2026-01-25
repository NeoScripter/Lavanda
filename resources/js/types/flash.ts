type OtpCode = {
    code: string | null;
    email: string;
};

export type Flash = {
    message: string | null;
    code: OtpCode | null;
    verifyEmail: string | null;
};
