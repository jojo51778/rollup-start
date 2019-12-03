import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife', // 插入script标签
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(), 
		production && terser()
  ],
  // 外部模块
  external: ['lodash']
}