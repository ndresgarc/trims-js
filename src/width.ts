import { MeasurePipe } from './types';

export const _fn_width = function (pipe: MeasurePipe) {

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