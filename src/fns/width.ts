import { MeasurePipe } from '../types';
import { IMeasureFn } from '../interfaces';

var _fn_width = function (pipe: MeasurePipe) {
    var propertyValue = window.getComputedStyle(this).getPropertyValue('width');            
    var cleanValue = propertyValue.slice(0, -2);
    if (!pipe) {
        return cleanValue;
    }
    if (pipe != 'px') {
        return;                
    }

    return cleanValue + pipe;
}

export default _fn_width;