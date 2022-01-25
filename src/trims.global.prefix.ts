import { init } from './init';

declare global {
    interface Window { __TRIMS: any; }
    interface HTMLElement {
        width: any;
        height: any;
    }
}

window.__TRIMS = 'global-prefix';
let fns = init('global-prefix');

HTMLElement.prototype.width = fns.width;
HTMLElement.prototype.height = fns.height;
