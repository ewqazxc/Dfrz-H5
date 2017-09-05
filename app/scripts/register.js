/**
 * Created by Administrator on 2017/8/28.
 */
(function () {
    'use strict';
    var products = [];
    $(function () {
        $.getJSON('../JSON/area.json',function (data) {
            products=data;
            console.log(data);
            var html1="";
            var html2="";
            for(var i=0,len=products.length;i<len;i++){
                html1+='<tr><td style="width: 350px">'+ products[i].country +'</td></tr>';
                html2+='<tr><td style="width: 350px">'+ products[i].code +'</td></tr>';
            }
            $('#country').html(html1);
            $('#code').html(html2);
        })
        $('#country').on('click','td',function () {
            $('#city button')[0].innerText=$(this)[0].innerText;
           /* console.log('123');
            console.log($('#city button')[0].innerText);
            console.log($(this)[0].innerText);*/
        })
        $('#code').on('click','td',function () {
            $('#phoneCode button')[0].innerText=$(this)[0].innerText;
            /*console.log('123');
            console.log($('#city button')[0].innerText);
            console.log($(this)[0].innerText);*/
        })
    })
})();

