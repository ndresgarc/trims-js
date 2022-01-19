import * as fns from './fns';

HTMLElement.prototype[slug] = {};

// When loaded
ready(function(){
    document.querySelectorAll('*').forEach(function(element){
        element.slug = {};
        Object.keys(fns).forEach(function(fn){
            element.slug[fn] = fns[fn].bind(element);
            HTMLElement.prototype[fn] = fns[fn];
        }, fns);
    });
});