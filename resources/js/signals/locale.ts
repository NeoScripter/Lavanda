import { effect, signal } from '@preact/signals';

const getInitialLocale = (): 'en' | 'ru' => {
    if (typeof window === 'undefined') return 'ru';
    return (localStorage.getItem('locale') as 'en' | 'ru') || 'ru';
};

export const locale = signal<'en' | 'ru'>(getInitialLocale());

export const prefersRussian = () =>
    navigator.language.startsWith('ru') || navigator.language.startsWith('ru');

const applyLocale = (lang: 'en' | 'ru') => {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = lang;
};

effect(() => {
    if (typeof window === 'undefined') return;

    const lang = locale.value;
    localStorage.setItem('locale', lang);
    applyLocale(lang);
});

if (typeof window !== 'undefined') {
    window.addEventListener('languagechange', () => {
        if (!localStorage.getItem('locale')) {
            locale.value = prefersRussian() ? 'ru' : 'en';
        }
    });
}
