import { signal, effect } from "@preact/signals";

export const appearance = signal(
    localStorage.getItem("appearance") || "system",
);

export const prefersDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

const applyTheme = (mode: string) => {
    const isDark = mode === "dark" || (mode === "system" && prefersDark());
    document.documentElement.classList.toggle("dark", isDark);
};

effect(() => {
    const mode = appearance.value;
    localStorage.setItem("appearance", mode);
    applyTheme(mode);
});

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
        if (appearance.value === "system") applyTheme("system");
    });
