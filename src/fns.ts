
import { _fn_width } from "./width";

export const init = function(flavour: string) {
    return {
        width: _fn_width,
        flavour: flavour
    }
}