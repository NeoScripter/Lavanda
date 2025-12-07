import { effect, signal } from '@preact/signals';

export const locale = signal<'en' | 'ru'>(
    (localStorage.getItem('locale') as 'en' | 'ru') || 'ru',
);

export const prefersRussian = () =>
    navigator.language.startsWith('ru') || navigator.language.startsWith('ru');

const applyLocale = (lang: 'en' | 'ru') => {
    document.documentElement.lang = lang;
};

effect(() => {
    const lang = locale.value;
    localStorage.setItem('locale', lang);
    applyLocale(lang);
});

window.addEventListener('languagechange', () => {
    if (!localStorage.getItem('locale')) {
        locale.value = prefersRussian() ? 'ru' : 'en';
    }
});
