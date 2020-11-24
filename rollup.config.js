import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from '@rollup/plugin-babel';
export default [
  {
    input: "index.js",
    output: {
      name: "Utils",
      file: "dist/utils.umd.js",
      format: "umd"
    },
    plugins: [
      resolve(),
      babel({ babelHelpers: "bundled" }),
      commonjs()
    ]
  },{
    input: "index.js",
    output: [
      {
        file: "dist/utils.cjs.js",
        format: "cjs"
      },{
        file: "dist/utils.es.js",
        format: "es"
      }
    ],
    plugins: [
      resolve(),
      babel({ babelHelpers: "bundled" }),
    ]
  }
]