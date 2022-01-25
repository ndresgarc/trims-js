
import { _fn_width } from './width';
import { _fn_height } from './height'

export const init = function(flavour: string) {
    return {
        width: _fn_width,
        height: _fn_height,
        flavour: flavour
    }
}