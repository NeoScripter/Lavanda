import preact from '@preact/preset-vite';
import tailwindcss from '@tailwindcss/vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import { defineConfig } from 'vite';

import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';

export default defineConfig({
    plugins: [
        preact(),
        laravel({
            input: ['resources/js/app.tsx'],
            refresh: true,
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                loadPaths: ['resources/scss'],
            },
        },
        postcss: {
            plugins: [
                postcssPresetEnv({
                    stage: 3,
                    features: {
                        'nesting-rules': false,
                    },
                }),
                autoprefixer(),
            ],
        },
    },
});
