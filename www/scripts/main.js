/**
 * Created by Vova on 24.11.2015.
 */

function Cart(sSelector, sCartSelector) {

}

function Cart2(sSelector) {
    var cart = new Cart(sSelector, '');
    var component = new Component(sSelector);
}


$(document).ready(function(){
    var cart2 = new Cart2('#minicart1');
    alert('hi')
})
