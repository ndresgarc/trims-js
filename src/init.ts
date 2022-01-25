
import { _fn_width } from './fns/width';
import { _fn_height } from './fns/height'

export const init = function(flavour: string) {
    return {
        width: _fn_width,
        height: _fn_height,
        flavour: flavour
    }
}