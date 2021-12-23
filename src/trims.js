(function(){

    var slug = document.currentScript.getAttribute('trims-slug');

    functions = {
        ahoy: function() {
            console.table({
                repo: "https://github.com/ndresgarc/trims-js.git",
                version: "0.0.1"
            });
        }
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
        case "prototype-scope":
            HTMLElement.prototype[slug] = functions;
        break;
    }

})();