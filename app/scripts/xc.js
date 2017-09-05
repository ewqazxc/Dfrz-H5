/**
 * Created by Administrator on 2017/8/28.
 */
(function () {
    'use strict';
    $.xc = {
        toCurrency: function (value) {
            return '¥' + value.toFixed(2);
        },
        sum: function (array, fun) {
            var total = 0;
            for (var i = 0, len = array.length; i < len; i++) {
                if (typeof(fun) == 'function') {
                    total += fun(array[i], i);
                }
                else {
                    total += array[i];
                }
            }
            return total;
        }
    }
})();