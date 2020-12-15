import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import eslint from '@rbnlffl/rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';

const min = process.env.min === 'true';
export default [
  {
    input: 'src/index.js',
    output: {
      name: 'Utils',
      file: min ? 'dist/utils.umd.min.js' : 'dist/utils.umd.js',
      format: 'umd',
    },
    plugins: [
      eslint(),
      resolve(),
      babel({ babelHelpers: 'bundled' }),
      commonjs(),
    ].concat(min ? [terser()] : []),
  }, {
    input: 'src/index.js',
    output: [
      {
        file: min ? 'dist/utils.cjs.min.js' : 'dist/utils.cjs.js',
        format: 'cjs',
      }, {
        file: min ? 'dist/utils.esm.min.js' : 'dist/utils.esm.js',
        format: 'es',
      },
    ],
    plugins: [
      eslint(),
      resolve(),
      babel({ babelHelpers: 'bundled' }),
    ].concat(min ? [terser()] : []),
  },
];
