import '@babel/polyfill';
import multiEntry from 'rollup-plugin-multi-entry';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import json from 'rollup-plugin-json';

export default {
    input: [
        '@babel/polyfill',
        './src/app/index.js',
    ],
    output: {
        file: './dist/bundle.js',
        format: 'iife',
        sourcemap: true,
        exports: 'named',
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react-is': 'reactIs',
            'prop-types': 'PropTypes',
        },
    },
    external: [
        'react',
        'react-dom',
        'react-is',
        'styled-components',
        'prop-types',
    ],
    plugins: [
        multiEntry(),
        babel({
            exclude: 'node_modules/**',
        }),
        resolve({
            preferBuiltins: true,
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        commonjs({
            // include: 'node_modules/**',
            // namedExports:
            // {
            //     './node_modules/react/react.js':
            //    ['cloneElement', 'createElement', 'PropTypes',
            //        'Children', 'Component'],
            // },
        }),
        serve({
            contentBase: 'dist',
            open: true,
        }),
        htmlTemplate({
            template: 'src/index.html',
            target: 'dist/index.html',
        }),
        livereload({ watch: 'dist' }),
        json(),
        postcss({
            extensions: ['.css'],
        }),
    ],
};
