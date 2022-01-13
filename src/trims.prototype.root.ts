import fns from './fns';

Object.keys(fns).forEach(function(fn){
    HTMLElement.prototype[fn] = fns[fn];
}, fns);