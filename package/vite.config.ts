import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            src: resolve(__dirname, 'src'),
        },
    },
    oxc: {
        include: /src\/.*\.[tj]sx?$/,
    },
    optimizeDeps: {
        rolldownOptions: {
            moduleTypes: {
                '.js': 'tsx'
            }
        }
    },
    plugins: [svgr(), react()],
});