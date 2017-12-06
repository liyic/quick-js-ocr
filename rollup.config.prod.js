import typescript from 'rollup-plugin-typescript2';
import sass from 'rollup-plugin-sass';

export default {
	input: './example/example.ts',
	output: {
        name: 'JsOCR',
        file: './example/example.js',
        format: 'umd'
	},
	plugins: [
        sass({ output: 'example/example.css' }),
        typescript()
	]
}