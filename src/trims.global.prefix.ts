import { init } from './fns';

declare global {
    interface Window { trims: any; }
    interface HTMLElement { width: any; }
}

window.trims = init('global-prefix');
let fns = init('global-prefix');

HTMLElement.prototype.width = fns.width;

console.log('trims.init()');