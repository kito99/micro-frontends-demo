import resolve from '@rollup/plugin-node-resolve';

module.exports = {
    input: 'src/app-one.js',
    output: {
        file: 'build/app-one.js',
        format: 'esm',
    },
    plugins: [resolve()]
};
