import fns from './fns';

Object.keys(fns).forEach(function(fn){
    window[slug + fn] = fns[fn];
}, fns);