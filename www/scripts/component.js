/**
 * Created by Vova on 09.11.2015.
 */
function Component(sSelector) {
    var elem;

    this.init = function (sSelector) {
        elem = $(sSelector);
        if (!elem.length) {
            console.log('Error Component init ')
        }
        else {
            console.log('Component init OK:' + elem.length)
        }
    };
    this.find = function (sSelector) {
        var res = elem.find(sSelector);
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
