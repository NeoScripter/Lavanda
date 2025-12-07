import { FC } from "preact/compat";
import css from "./Home.module.scss";
import AppLayout from "@/layouts/user/AppLayout/AppLayout";

const Home: FC<{ className?: string }> = ({ className }) => {
    return (
        <AppLayout>
            <div class={css.wrapper}>
                Hello world
                <p class={ css.test }>Test</p>
            </div>
        </AppLayout>
    );
};

export default Home;
