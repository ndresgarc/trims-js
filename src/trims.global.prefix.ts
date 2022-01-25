import { init } from './fns';

declare global {
    interface Window { trims: any; }
    interface HTMLElement {
        width: any;
        height: any;
    }
}

window.trims = init('global-prefix');
let fns = init('global-prefix');

HTMLElement.prototype.width = fns.width;
HTMLElement.prototype.height = fns.height;

console.log('trims.init()');