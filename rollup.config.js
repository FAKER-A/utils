import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import eslint from '@rbnlffl/rollup-plugin-eslint';

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'Utils',
      file: 'dist/utils.umd.js',
      format: 'umd',
    },
    plugins: [
      eslint(),
      resolve(),
      babel({ babelHelpers: 'bundled' }),
      commonjs(),
    ],
  }, {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/utils.cjs.js',
        format: 'cjs',
      }, {
        file: 'dist/utils.es.js',
        format: 'es',
      },
    ],
    plugins: [
      eslint(),
      resolve(),
      babel({ babelHelpers: 'bundled' }),
    ],
  },
];
