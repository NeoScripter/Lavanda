import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "preact/compat/client";

createInertiaApp({
    title: (title) => (title ? `${title} - Lavanda` : "Lavanda"),
    resolve: (name) => {
        const pages = import.meta.glob("./pages/**/*.tsx");
        return pages[`./pages/${name}.tsx`]();
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});

function setRootBase() {
    const base = (
        parseFloat(getComputedStyle(document.documentElement).fontSize) / 16
    ).toString();
    document.documentElement.style.setProperty("--root-base", base);
}

setRootBase();

// window.addEventListener("resize", setRootBase);
