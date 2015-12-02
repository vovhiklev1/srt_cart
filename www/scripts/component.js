/**
 * Created by Vova on 09.11.2015.
 */
function Component(sSelector) {
    this.elem;

    this.init = function (sSelector) {
        this.elem = $(sSelector);
        if (!this.elem.length) {
            console.log('Error Component init ' + sSelector)
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
    this.copyData = function (oSource, oDestination, aFieldNames) {
        $.each(aFieldNames, function (i, fieldName) {
            var oSourceElement = oSource.find(fieldName);
            var oDestinationElement = oDestination.find(fieldName);
            var tagName = oSourceElement.prop('tagName');
            if (tagName == 'IMG') { //console.log('copydata')
                oDestinationElement.attr('src', oSourceElement.attr('src'));

            }
            else if (tagName == 'INPUT' || tagName == 'TEXTAREA') {
                oDestinationElement.val(oSourceElement.val())
            }
            else {
                oDestinationElement.html(oSourceElement.html())
            }
        })
    }
};
//var component = new Component;
//component.init('#form2');
