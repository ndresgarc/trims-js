import { _fn_ahoy } from './fns/ahoy';
import { _fn_width } from './fns/width';
import { _fn_height } from './fns/height'
import { _fn_show } from './fns/show';
import { _fn_hide } from './fns/hide';

export const init = function(flavour: string) {
    return {
        ahoy: _fn_ahoy,
        width: _fn_width,
        height: _fn_height,
        show: _fn_show,
        hide: _fn_hide,
        flavour: flavour
    }
}