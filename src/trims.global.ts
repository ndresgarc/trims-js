import fns from './fns';

Object.keys(fns).forEach(function(fn){
    window[fn] = fns[fn];
}, fns);