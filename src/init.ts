
import { _fn_width } from './fns/width';
import { _fn_height } from './fns/height'
import { _fn_show } from './fns/show';
import { _fn_hide } from './fns/hide';

export const init = function(flavour: string) {
    return {
        width: _fn_width,
        height: _fn_height,
        show: _fn_show,
        hide: _fn_hide,
        flavour: flavour
    }
}