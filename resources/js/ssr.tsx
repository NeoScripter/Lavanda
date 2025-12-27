import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import ReactDOMServer from 'preact-render-to-string';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.toString,
        resolve: (name) => {
            const pages = import.meta.glob('./pages/**/*.jsx', { eager: true });
            return pages[`./pages/${name}.jsx`];
        },
        setup: ({ App, props }) => <App {...props} />,
    }),
);
