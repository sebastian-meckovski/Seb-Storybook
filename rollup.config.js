import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import scss from "rollup-plugin-scss";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "./SebComponents",
    output: [
      {
        file: "dist/SebComponents.js",
        format: "cjs",
      },
    ],
    plugins: [
      scss({
        insert: true,
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      terser(),
    ],
  },
];
