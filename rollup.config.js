import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
// import commonjs from "@rollup/plugin-commonjs";

var config = [
	{
		input: './index.js',
		output: [
			{
				file: 'dist/index.js',
				format: 'cjs',
			},
		],
		plugins: [
			json(),
			scss({
				insert: true,
			}),
			babel({
				exclude: 'node_modules/**',
				presets: ['@babel/preset-react'],
			}),
			terser(),
			resolve(),
		],
		external: ['react', 'react-dom'],
	},
];

export default config;
