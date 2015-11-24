/**
 * Created by Vova on 24.11.2015.
 */

/*function Cart(sSelector) {

}*/


function Cart(sSelector, sCartSelector) {
    var f = this;

    f.main = function(){
        f.init(sSelector);
        f.cart = $(sCartSelector);
        f.list = f.cart.find('.b-minicart__list');
        f.button = f.cart.find('.b-minicart__button');
        f.order = f.cart.find('.b-minicart__order');
        f.total = f.cart.find('.b-minicart__total');
        f.quantity = f.cart.find('.b-minicart__quantity');


    };

    f.add = function(){};
    f.put = function(){};
    f.load = function(){};

    $(document).ready(function () {
        f.main();
    });

}



