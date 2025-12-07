import { Head } from "@inertiajs/react";
import { ComponentChildren } from "preact";
import { FC } from "preact/compat";

const AppHead: FC<{ title: string; children: ComponentChildren }> = ({
    title,
    children,
}) => {
    return (
        <Head>
            <title>{title ? `${title} - My App` : "My App"}</title>
            {children}
        </Head>
    );
};

export default AppHead;
