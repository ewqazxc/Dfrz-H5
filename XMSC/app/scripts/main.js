/**
 * Created by Administrator on 2017/8/26.
 */
(function () {
  'use strict';
  var products = [];
  $(function () {
    /**
     * 页面加载时，验证是否登录
     * 登录时，改变导航栏信息
     * */
    $(document).ready(function () {
      var ACCOUNT_KEY2 = 'loginUser';
      var userID = store.get(ACCOUNT_KEY2, []);
      console.log(userID);
      if(userID==''){
        return;
      }
      var html = $.xc.cutTel(userID) + '<span class="glyphicon glyphicon-triangle-bottom"></span>';
      $('#navTel').html(html);
      var login = localStorage.getItem('login');
      if (login == 'true') {
        $('#isLogin').show();
        $('#noLogin').hide();
      }
      else {
        $('#noLogin').show();
        $('#isLogin').hide();
      }
    });

    /**
     * 下拉菜单，悬停触发
     * */
    $('[data-toggle=hover]').parent().on('mouseenter mouseleave', function () {
      $(this).toggleClass('open');
    });
    $('#a-tvBox').parent().on('mouseenter mouseleave', function () {
      $(this).toggleClass('open');
    });

   /**
    * 退出时清除登录状态
    * */
    $('#logout').on('click', function () {
      $('#noLogin').show();
      $('#isLogin').hide();
      var ACCOUNT_KEY = 'login';
      store.remove(ACCOUNT_KEY);
      var ACCOUNT_KEY2 = 'loginUser';
      store.remove(ACCOUNT_KEY2);
      window.location.reload();
    });

    /**
     * 折叠菜单，悬停触发
     * */
    var enterTimeout = [], leaveTimeout = [];
    /*  $(document).off('click.bs.collapse.data-api','[data-toggle="collapse"]');*/
    $('[data-collapse-trigger=hover]').hover(function () {
      var i = $(this);
      var index = Number(i.data('id'));
      clearTimeout(leaveTimeout[index]);
      clearTimeout(enterTimeout[index]);
      enterTimeout[index] = setTimeout(function () {
        var target = i.data('target');
        $(target).collapse('show');
        console.log(target);
      }, 350);
      //$(this).trigger('click');
    }, function () {
      var i = $(this);
      var index = Number(i.data('id'));
      clearTimeout(enterTimeout[index]);
      clearTimeout(leaveTimeout[index]);
      leaveTimeout[index] = setTimeout(function () {
        var target = i.data('target');
        $(target).collapse('hide');
      }, 400);
    });

    var subTotal = "";
    /**
     * 获取购物车数据，暂不使用
     * */
    /*  $.getJSON('0/XMSC/app/JSON/shopping.json',function (data) {
     products=data;
     console.log(products)
     if(products!=''){
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
     });*/

    /**
     * 更新购物车底部数据，暂不使用
     * */
    /*    function updateFoot(array) {
      var total1 = $.xc.sum(array, function (item, index) {
        return item.quantity;
      });
      var total2 = $.xc.sum(array, function (item, index) {
        return item.subTotal;
      });
      $('tfoot tr td strong:nth-child(1)').text(total1);
      $('#tota2').text($.xc.toCurrency(total2));
    }*/
  });
})();





