import { fns } from './fns';

export const init = function(flavour: string) {
    return {
        ready: fns.ready,
        /*
        ahoy: _fn_ahoy,
        width: _fn_width,
        height: _fn_height,
        show: _fn_show,
        hide: _fn_hide,
        */
        flavour: flavour
    }
}