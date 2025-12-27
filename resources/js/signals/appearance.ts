import { effect, signal } from '@preact/signals';

const isBrowser = typeof window !== 'undefined';

export const appearance = signal(
    isBrowser ? localStorage.getItem('appearance') || 'system' : 'system',
);

export const prefersDark = () => {
    if (!isBrowser) return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const applyTheme = (mode: string) => {
    if (!isBrowser) return;
    const isDark = mode === 'dark' || (mode === 'system' && prefersDark());
    document.documentElement.classList.toggle('dark', isDark);
};

effect(() => {
    if (!isBrowser) return;

    const mode = appearance.value;
    localStorage.setItem('appearance', mode);
    applyTheme(mode);
});

if (isBrowser) {
    window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', () => {
            if (appearance.value === 'system') applyTheme('system');
        });
}
