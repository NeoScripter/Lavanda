import { ComponentChildren } from "preact";

export type NodeProps<P = {}> = P & {
    children?: ComponentChildren | string;
    className?: string;
};
