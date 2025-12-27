import { MD } from '@/lib/constants/breakpoints';
import { computed, effect, signal } from '@preact/signals';

const isBrowser = typeof window !== 'undefined';

export const sidebarState = signal<'hidden' | 'mini' | 'wide'>('wide');
export const isHidden = computed(() => sidebarState.value === 'hidden');
export const isMini = computed(() => sidebarState.value === 'mini');
export const isWide = computed(() => sidebarState.value === 'wide');

export const hide = () => {
    if (!isBrowser || window.innerWidth >= MD) return;
    sidebarState.value = 'hidden';
};

export const minify = () => {
    if (!isBrowser || window.innerWidth < MD) return;
    sidebarState.value = 'mini';
};

export const expand = () => {
    sidebarState.value = 'wide';
};

const updateSidebar = (e: MediaQueryListEvent | MediaQueryList) => {
    if (e.matches) {
        expand();
    } else {
        hide();
    }
};

// Browser-only initialization
if (isBrowser) {
    const mq = window.matchMedia(`(min-width: ${MD}px)`);

    updateSidebar(mq);
    mq.addEventListener('change', updateSidebar);
}

// Effect for overflow control
effect(() => {
    if (!isBrowser) return;

    document.documentElement.style.overflowY = isHidden.value ? 'auto' : 'clip';

    return () => {
        document.documentElement.style.overflowY = 'auto';
    };
});

// Effect for keyboard handling
effect(() => {
    if (!isBrowser) return;

    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && window.innerWidth < MD) hide();
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => window.removeEventListener('keydown', handleKeyPress);
});
