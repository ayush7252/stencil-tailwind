import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'project-02',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      baseUrl: '/',
      buildDir: 'build',
      dir: 'www',
      empty: false
    }
  ],
  globalStyle: 'src/global/app.css',
  plugins: [
    postcss({
      plugins: [tailwind, autoprefixer]
    })
  ]
};