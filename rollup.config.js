import pkg from './package.json';

let banner = `/*! ${pkg.name} v${pkg.version} | ${pkg.description} | Copyright ${new Date().getFullYear()} | ${pkg.license} license */`;
let formats = ['iife', 'es', 'umd'];

// The files to compile with rollup.js,
// and the settings to use for them
export default formats.map(function (format) {
    return {
        input: 'temp/trims.js',
        output: {
            file: `dist/trims.${format}.js`,
            format: format,
            name: 'Trims',
            banner: banner,
            exports: 'auto'
        }
    };
});