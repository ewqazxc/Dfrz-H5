/**
 * Created by Administrator on 2017/8/26.
 */
(function () {
  'use strict';
  var products = [];
  $(function () {
    var subTotal="";
    /*$.getJSON('JSON/shopping.json',function (data) {
      products=data;
      if(products!=[]){
        $('#noneShop').remove();
        $('tfoot').show();
      }

      console.log(data);
      var html = '';
      for(var i=0,len=products.length;i<len;i++){
        products[i].subTotal=products[i].quantity * products[i].price;
        products[i].fullName=products[i].name+" "+products[i].key;
      }
      for(var i=0,len=products.length;i<len;i++){
        html+='<tr>';
        html+='<td class="col-md-3 col-xs-3 text-center"><img class="img-responsive" src="'+ products[i].image +'" alt=""></td>';
        html+='<td class="col-md-6 col-xs-6 text-left">'+ '<small>' + products[i].fullName + '</small>' +'</td>';
        html+='<td class="col-md-3 col-xs-3 text-right">'+ $.xc.toCurrency(products[i].price)+' x '+  products[i].quantity  +'</td>';
        html+='</tr>'
      }
      $('#shop-car tbody').html(html);
      updateFoot(products);

      console.log(products[0].subTotal);
      console.log(products[0].fullName);
    });*/
    /*        $('#dropdownMenu1').on('mouseover',function () {
     $('#shop-car').show();
     /!*  $('#btn-car').addClass('open');
     $('#btn-car').attr('aria-expanded',function () {
     return true;
     });*!/
     });
     $('#dropdownMenu1').on('mouseout',function () {
     $('#shop-car').hide();
     /!* $('#btn-car').removeClass('open');
     $('#btn-car').attr('aria-expanded',function () {
     return false;
     });*!/
     });*/
    $('[data-toggle=hover]').parent().on('mouseenter mouseleave',function () {
      $(this).toggleClass('open');
    });
    $('#a-tvBox').parent().on('mouseenter mouseleave',function () {
      $(this).toggleClass('open');
    });
    /*        $('#a-tvBox').hover(function () {
     $('#tvBox').show();
     },function () {
     $('#tvBox').hide();
     });*/
    function updateFoot(array) {
      var total1= $.xc.sum(array,function (item, index) {
        return item.quantity;
      });
      var total2=$.xc.sum(array,function (item, index) {
        return item.subTotal;
      });
      console.log(total1);
      $('tfoot tr td strong:nth-child(1)').text(total1);
      console.log(total2);
      $('#tota2').text($.xc.toCurrency(total2));
    }
  })
})();





