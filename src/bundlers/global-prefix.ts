import { init } from '../internals/init';

declare global {
    interface Window {
        __TRIMS: 'global' | 'global-prefix';
        __TRIMS_SLUG: string;
          trims_ahoy: any;
          trims_width: any;
          trims_height: any;
          trims_show: any;
          trims_hide: any;
    }
}

window.__TRIMS = 'global-prefix';
window.__TRIMS_SLUG = 'trims_';
let fns = init('global-prefix');

Object.keys(fns).forEach(function(fnKey){
    window[window.__TRIMS_SLUG + fnKey] = fns[fnKey];
}, fns);
