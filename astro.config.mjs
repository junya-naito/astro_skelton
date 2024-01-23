import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/_mixin.scss", "src/styles/_variables.scss";`,
        },
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === undefined) {
            return '';
          }
          let extType = assetInfo.name.split('.')[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          }
          return `${extType}/[name][extname]`;
        },
        chunkFileNames: 'scripts/[name].js',
        entryFileNames: 'scripts/[name].js',
      },
    },
    inlineStylesheets: 'never',
  },
});
