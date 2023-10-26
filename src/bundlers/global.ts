import { init } from '../internals/init';

declare global {
    interface Window {
        __TRIMS: 'global' | 'global-prefix';
        __TRIMS_SLUG: string;
        ahoy: any;
        width: any;
        height: any;
        show: any;
        hide: any;
    }
}

window.__TRIMS = 'global';
let fns = init('global');

Object.keys(fns).forEach(function(fnKey){
    window[fnKey] = fns[fnKey];
}, fns);
