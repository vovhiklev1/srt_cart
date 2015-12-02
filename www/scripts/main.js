/**
 * Created by Vova on 24.11.2015.
 */

<<<<<<< HEAD
/*function Cart(sSelector) {

 }*/

function Good(oGoodElement) {
    var g = this;
    g.elem = oGoodElement; //alert(g.elem.attr('class') )
    g.getId = function () {
        return g.elem.attr('class').match(/b-good_id_(\d{1,7})/)[1];
    };

};

function Cart(sSelector, sCartSelector) {
    var f = this;

    f.main = function () {
        f.init(sSelector);
        f.cart = $(sCartSelector);
        f.list = f.cart.find('.b-minicart__list');
        f.button = f.cart.find('.b-minicart__button');
        f.order = f.cart.find('.b-minicart__order');
        f.total = f.cart.find('.b-minicart__total');
        f.quantity = f.cart.find('.b-minicart__quantity');
        f.goods = {};
        $.cookie.json = true;


//11111
        f.showHideCart = function () {
            f.list.toggle();

        };
        f.button.bind('click', f.showHideCart);
        ///111

        f.elem.find('.b-order-form').submit(function (event) {
            event.preventDefault();
           // alert($(this).attr('class'));
            f.add($(this))
        });

///1111

        /*f.elem.find('.b-order-form').submit(function (event) {
         event.preventDefault();
         //alert($(this).attr('class'))
         f.add($(this));
         });*/


        /*1111
         f.elem.find('.b-order-form__plus').bind('click', function (event) {
         var form_quantity = $(this).siblings('.b-order-form__quantity').val();
         form_quantity++;
         $(this).siblings('.b-order-form__quantity').val(form_quantity);
         //  f.add($(this));
         });*/


        f.elem.find('.b-order-form__plus').bind('click', f.increaseQuantity);
        f.elem.find('.b-order-form__minus').bind('click', f.decreaseQuantity);


        /*1111
         f.elem.find('.b-order-form__minus').bind('click', function (event) {
         var form_quantity = $(this).siblings('.b-order-form__quantity').val();
         form_quantity == 1 ? form_quantity : form_quantity--;
         $(this).siblings('.b-order-form__quantity').val(form_quantity);
         f.add($(this));
         });*/

        /*11111
         f.button.click(function () {
         if (f.list.find('.b-good').length > 1) {
         f.list.find('.b-goods').slideToggle()
         }
         });*/


    };

    f.changeQuantity = function (oBtn, iShift) {
        var quantityTextField = $(oBtn).siblings('.b-order-form__quantity');

        currentQuantity = parseInt(quantityTextField.val()) + iShift;
        if (currentQuantity > 0) {
            quantityTextField.val(currentQuantity);
        }
        else {
            alert('товаров не может быть меньше одного');
        }
    };

    f.bindMinicartEvents = function (newGood) {

        newGood.find('.b-good__delete').bind('click', f.del).end()
            .find('.b-order-form__plus').bind('click', f.increaseQuantity()).end()
            .find('.b-order-form__minus').bind('click', f.decreaseQuantity()).end()
            .find('.b-order-form').bind('submit', f.add.end();


    };

    f.increaseQuantity = function () {
        //alert('add')
        f.changeQuantity(this, 1);
    };
    f.decreaseQuantity = function () {
        //alert('del')
        f.changeQuantity(this, -1);
    };


    f.get_event_val = function (event) {
        return $(event).siblings('.b-order-form__quantity').val();
    };

    f.get_match_elem = function (event) {
        var currEv = $(event).closest('.b-good');
        var currEvId = currEv.attr('class').match(/b-good_id_(\d{1,7})/)[1];
        return f.elem.find('.b-good_id_' + currEvId);
    };

    f.add = function (event) {
        // f.order_form_plus = f.list.find('.b-order-form__plus' );

        var orderForm = $(event);
        var currentGood = orderForm.closest('.b-good');
        //alert(currentGood.attr('class'));
        var addedGood = f.put(currentGood); //alert(addedGood)

        f.goods[addedGood.getId()] = orderForm.find('.b-order-form__quantity').val();
        $.cookie('cartGoods', f.goods, {'expiers': 7, 'path': '/'});
    };

    f.put = function (currentGood) {
        var addedGood = new Good(currentGood);

        f.bindMinicartEvents(newGood);

        currentGood.addClass('b-good_in-cart');

        var good_id_class = 'b-good_id_' + addedGood.getId();
        var existingGood = f.list.find('.' + good_id_class); // alert(existingGood.length)

        if (existingGood.length) {
            f.copyData(currentGood, existingGood, ['.b-order-form__quantity']); //console.log(existingGood.length)
        }

        else {
            var newGood = f.list.find('.b-good:first-child').clone(); //console.log(f.list.find('.b-good:first-child').attr('class'))
            newGood.addClass(good_id_class);

            f.copyData(currentGood, newGood, ['.b-good__image', '.b-good__name', '.b-order-form__quantity']);
            f.list.find('.b-goods').append(newGood);

            //f.list_forms =  f.list.find('.b-order-form');
            newGood.find('.b-order-form__plus').click(function (event) {
                var form_quantity = f.get_event_val($(this));
                form_quantity++;
                var elem = f.get_match_elem($(this));
                elem.find('.b-order-form__quantity').val(form_quantity);
                f.add(elem);

            });

            newGood.find('.b-order-form__minus').click(function (event) {
                var form_quantity = f.get_event_val($(this));
                form_quantity == 1 ? form_quantity : form_quantity--;
                var elem = f.get_match_elem($(this));
                elem.find('.b-order-form__quantity').val(form_quantity);
                f.add(elem);
            });


            newGood.find('.b-order-form').submit(function (event) {
                event.preventDefault();
                //alert('hi')
                currentGood.removeClass('b-good_in-cart');
                newGood.removeClass(good_id_class);
                newGood.remove();


                // alert(f.elem.find('.b-good_in-cart').length)
                if (f.elem.find('.b-good_in-cart').length < 1) {
                    f.cart.find('.b-minicart__list').slideUp()
                }
                ;

            });


            if (f.list.length >= 1) {
                f.list.slideDown();
            } else {
                f.list.slideUp()
            }
            ;

            f.bindMinicartEvents(!newGood ? existingGood : newGood);
        }
        return addedGood

    };

    f.load = function () {

        f.goods = $.cookie('cartGoods'); alert('load'+f.goods.length);
        if (f.goods) {

            $.each(f.goods, function (good_id, quantity) {
                var currentGood = f.elem.find('.b-good_id_' + good_id);
                currentGood.find('.b-order-form__quantity').val(quantity);
                f.put(currentGood);

            })
        }
    };


    $(document).ready(function () {
         alert('f.main')
        f.main();
       // f.load();


    });
=======
function Cart(sSelector, sCartSelector) {
>>>>>>> parent of b74f980... init ok


<<<<<<< HEAD
=======
function Cart2(sSelector) {
    var cart = new Cart(sSelector, '');
    var component = new Component(sSelector);
>>>>>>> parent of b74f980... init ok
}


$(document).ready(function(){
    var cart2 = new Cart2('#minicart1');
    alert('hi')
})
