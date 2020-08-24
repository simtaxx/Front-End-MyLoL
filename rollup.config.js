import commonjs from '@rollup/plugin-commonjs';
import html from 'rollup-plugin-html2';
import livereload from 'rollup-plugin-livereload';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import preprocess from 'svelte-preprocess';

const isDev = true;
const buildDir = 'dist';
const port = 3000;

// define all our plugins
const plugins = [
  svelte({
    dev: isDev,
    extensions: ['.svelte'],
    preprocess: preprocess()
  }),
  typescript({ sourceMap: isDev }),
  resolve({
    browser: true,
    dedupe: ['svelte']
  }),
  commonjs(),
  html({
    template: 'src/index.html',
    fileName: 'index.html'
  }),
];

if (isDev) {
  plugins.push(
    // like a webpack-dev-server
    serve({
      contentBase: buildDir,
      historyApiFallback: true, // for SPAs
      port,
    }),
    livereload({ watch: buildDir })
  );
} else {
  plugins.push(terser({ sourcemap: isDev }));
}

module.exports = {
  input: 'src/main.js',
  output: {
    name: 'bundle',
    file: `${buildDir}/bundle.js`,
    sourcemap: isDev,
    format: 'iife',
  },
  plugins,
};