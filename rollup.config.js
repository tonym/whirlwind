import commonjs from '@rollup/plugin-commonjs';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

const baseContents = pkg => ({
  author: pkg.author,
  bugs: pkg.bugs,
  dependencies: {},
  description: pkg.description,
  homepage: pkg.homepage,
  license: pkg.license,
  main: './node/whirlwind.js',
  name: pkg.name,
  repository: pkg.repository,
  sideEffects: false,
  version: pkg.version
});

const external = ['jss', 'jss-preset-default', 'redux'];

const input = 'src/public-api.ts';

export default [
  {
    external,
    input,
    output: {
      dir: 'dist',
      format: 'es'
    },
    plugins: [typescript(), nodeResolve(), commonjs(), generatePackageJson({ baseContents })]
  },
  {
    external,
    input,
    output: {
      file: 'dist/node/whirlwind.js',
      format: 'cjs',
      name: 'whirlwind',
      plugins: [
        terser({
          compress: {
            drop_console: true
          },
          output: { quote_style: 1 }
        })
      ]
    },
    plugins: [typescript(), nodeResolve(), commonjs()]
  }
];
