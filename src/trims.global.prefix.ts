import { init } from './init';

declare global {
    interface Window { __TRIMS: any; }
    interface HTMLElement {
        ahoy: any;
        width: any;
        height: any;
        show: any;
        hide: any;
    }
}

window.__TRIMS = 'global-prefix';
let fns = init('global-prefix');

HTMLElement.prototype.ahoy = fns.ahoy;
HTMLElement.prototype.width = fns.width;
HTMLElement.prototype.height = fns.height;
HTMLElement.prototype.show = fns.show;
HTMLElement.prototype.hide = fns.hide;
