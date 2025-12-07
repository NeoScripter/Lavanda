import { cn } from '@/utils/cn';
import { Link, usePage } from '@inertiajs/react';
import { Moon, Sun } from 'lucide-preact';
import { HTMLAttributes } from 'preact';
import En from '@/assets/svgs/en-language.svg';
import Ru from '@/assets/svgs/ru-language.svg';

export default function LangugageTabs({
    className = '',
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    const { locale } = usePage<{ locale: 'en' | 'ru' }>().props;
    const tabs: { value: string; icon: string; label: string }[] = [
        {
            value: 'en',
            icon: En,
            label: locale === 'en' ? 'English' : 'Английский',
        },
        {
            value: 'ru',
            icon: Ru,
            label: locale === 'en' ? 'Russian' : 'Русский',
        },
    ];

    return (
        <div
            className={cn(
                'inline-flex gap-1 rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800',
                className,
            )}
            {...props}
        >
            {tabs.map(({ value, icon, label }) => (
                <Link
                    as={'button'}
                    key={value}
                    href={route('locale.update')}
                    data={{ locale: value }}
                    method="post"
                    className={cn(
                        'flex items-center rounded-md px-3.5 py-1.5 transition-colors',
                        locale === value
                            ? 'bg-white shadow-xs dark:bg-neutral-700 dark:text-neutral-100'
                            : 'text-neutral-500 hover:bg-neutral-200/60 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-700/60',
                    )}
                >
                    <span
                        className="-ml-1 block h-4 w-4"
                        aria-hidden="true"
                    >
                        {' '}
                        <img
                            src={icon}
                            alt=""
                            class="object-contain size-full"
                        />
                    </span>
                    <span className="ml-1.5 text-sm">{label}</span>
                </Link>
            ))}
        </div>
    );
}
