import fns from './fns';

HTMLElement.prototype[slug] = function () {
    return {
        width: _fn_width.bind(this),
        heigh: _fn_height(this)
    }
}  