export const _fn_height = function (pipe) {
    var propertyValue = window.getComputedStyle(this).getPropertyValue('height');            
    var cleanValue = propertyValue.slice(0, -2);
    if (!pipe) {
        return cleanValue;
    }
    if (pipe != 'px') {
        return;                
    }

    return cleanValue + pipe;
}