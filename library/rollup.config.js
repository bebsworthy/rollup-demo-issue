import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript'
import commonjs from 'rollup-plugin-commonjs';
// import css from 'rollup-plugin-css-only';
// import babel from "rollup-plugin-babel";
// import json from 'rollup-plugin-json';
import filesize from 'rollup-plugin-filesize';
// import resolve from 'rollup-plugin-node-resolve';

const LIBRARY = 'my-library'
export default [
    
    // ESM build to be used with webpack/rollup.
    {
        input: 'src/index.ts',

        output: {
            format: 'esm',
            file: 'lib/' + LIBRARY + '.esm.js',
            sourcemap: true,
            name: LIBRARY
        },

        external: [ 'vue', 
                    'vue-router',  
                    'vue-class-component',  
                    'vue-property-decorator',  
                    'core-js' 
        ],
        
        plugins: [
            typescript({
                tsconfig: false,
                experimentalDecorators: true,
                module: 'es2015'
              }),
            vue(),
            commonjs(),
            filesize(),
        ]
    },
]