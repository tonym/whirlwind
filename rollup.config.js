import commonjs from '@rollup/plugin-commonjs';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

const baseContents = pkg => ({
  name: pkg.name,
  description: pkg.description,
  author: pkg.author,
  version: pkg.version,
  license: pkg.license,
  homepage: pkg.homepage,
  main: './node/whirlwind.js',
  repository: pkg.repository,
  bugs: pkg.bugs,
  dependencies: {},
  peerDependencies: pkg.peerDependencies,
  peerDependenciesMeta: pkg.peerDependenciesMeta,
  sideEffects: false
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
