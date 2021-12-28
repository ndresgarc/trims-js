
(function(){

    const TRIMS_DEFAULT_SLUG = 'trims';

    var slug = document.currentScript.getAttribute('trims-slug') || TRIMS_DEFAULT_SLUG;

    function ready(fn) {
        if (document.readyState != 'loading'){
          fn();
        } else {
          document.addEventListener('DOMContentLoaded', fn);
        }
    }

    var _fn_width = function (pipe) {
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

    var _fn_height = function (pipe) {
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

    functions = {

        ahoy: function() {
            console.table({
                repo: "https://github.com/ndresgarc/trims-js.git",
                version: "0.0.1"
            });
        },

        width: _fn_width,

        height: _fn_height
    };

    switch (document.currentScript.getAttribute('trims-interface')) {
        case "global":
            Object.keys(functions).forEach(function(fn){
                window[fn] = functions[fn];
            }, functions);
        break;
        case "global-prefix":
            Object.keys(functions).forEach(function(fn){
                window[slug + fn] = functions[fn];
            }, functions);
        break;
        case "prototype-root":
            Object.keys(functions).forEach(function(fn){
                HTMLElement.prototype[fn] = functions[fn];
            }, functions);
        break;
        case 'prototype-chained':
            HTMLElement.prototype[slug] = function () {
                return {
                    width: _fn_width.bind(this),
                    heigh: _fn_height(this)
                }
            }    
        break;
        case "prototype-scope":

            HTMLElement.prototype[slug] = {};

            // When loaded
            ready(function(){
                document.querySelectorAll('*').forEach(function(element){
                    element.trims = {};
                    element.trims.width = _fn_width.bind(element);
                    element.trims.height = _fn_height.bind(element);
                });
            });

            // Keep alive
            // Start mutation observer

        break;
    }

})();

