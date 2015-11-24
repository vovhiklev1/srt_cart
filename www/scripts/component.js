/**
 * Created by Vova on 09.11.2015.
 */
function Component(sSelector) {
    this.elem;

    this.init = function (sSelector) {
        this.elem = $(sSelector);
        if (!this.elem.length) {
            console.log('Error Component init '+ sSelector)
        }
        else {
            console.log('Component init OK:' + this.elem.length)
        }
    };
    this.find = function (sSelector) {
        var res = this.elem.find(sSelector);
        if (!res.length) {
            console.log('Error Component find ' + sSelector)
        }
        else {
            console.log('Component find OK ' + sSelector);
            return res
        }
        ;
    };
};
//var component = new Component;
//component.init('#form2');
