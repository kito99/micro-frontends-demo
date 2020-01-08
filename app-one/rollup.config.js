import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

module.exports = {
    input: 'src/app-one.ts',
    output: {
        file: 'build/app-one.js',
        format: 'esm',
        compact: true
    },
    plugins: [typescript(), resolve()]
};
