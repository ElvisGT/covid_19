import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "http://localhost/8080/",
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/styles/_variables.scss";`
            }
        }
    },

});