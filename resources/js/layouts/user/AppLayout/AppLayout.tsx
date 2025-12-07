import { NodeProps } from "@/types/nodeProps";
import { FC } from "preact/compat";
import css from "./AppLayout.module.scss";
import { cn } from "@/utils/cn";
import "../../../../scss/app.scss";

const AppLayout: FC<NodeProps> = ({ className, children }) => {
    return <div class={cn(css.wrapper, className)}>{children}</div>;
};

export default AppLayout;
