import 'core-js/stable';
import 'regenerator-runtime/runtime';
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
import builtins from 'rollup-plugin-node-builtins';
import progress from 'rollup-plugin-progress';

import autoprefixer from 'autoprefixer';

export default {
    input: [
        'core-js/stable',
        'regenerator-runtime/runtime',
        './src/app/index.js',
        './src/css/main.scss',
    ],
    output: {
        file: './dist/bundle.js',
        format: 'esm',
        sourcemap: true,
    },
    plugins: [
        progress(),
        multiEntry(),
        builtins(),
        postcss({
            plugins: [
                autoprefixer(),
            ],
        }),
        babel({
            babelrc: true,
        }),
        resolve({
            browser: true,
            extensions: ['.js', '.jsx', '.json'],
        }),
        commonjs({
            include: 'node_modules/**',
            exclude: [
                'node_modules/process-es6/**',
            ],
            namedExports: {
                'node_modules/react/index.js': [
                    'Children',
                    'Component',
                    'PureComponent',
                    'PropTypes',
                    'createElement',
                    'useContext',
                    'useState',
                    'useEffect',
                    'useCallback',
                    'memo',
                ],
                'node_modules/react-dom/index.js': ['render'],
                'node_modules/react-is/index.js': [
                    'isValidElementType',
                    'isContextConsumer',
                ],
            },
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        htmlTemplate({
            template: 'src/index.html',
            target: 'dist/index.html',
        }),
        json(),
        serve({
            contentBase: 'dist',
            open: true,
            historyApiFallback: true,
        }),
        livereload({ watch: 'dist' }),
    ],
};
