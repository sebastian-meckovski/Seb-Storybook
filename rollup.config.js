import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import scss from "rollup-plugin-scss";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "./src/index",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      // {
      //   file: "dist/index.es.js",
      //   format: "es",
      //   exports: "named",
      // },
    ],
    plugins: [
      scss({
        insert: true
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      terser()
    ],
  },
  {
    input: "./src/index1",
    output: [
      {
        file: "dist/another thing/sebComponent2.js",
        format: "cjs",
      }
    ],
    plugins: [
      scss({
        insert: true
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
    ],
  },
];
