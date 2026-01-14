import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import glsl from 'vite-plugin-glsl';
import { templateCompilerOptions } from '@tresjs/core';

export default defineConfig({
  plugins: [
    vue({
      ...templateCompilerOptions,
    }),
    glsl(),
  ],
});
