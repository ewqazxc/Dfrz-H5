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
    },
    randomNum:function (n,t){
    for(var i=0;i<n;i++){
      t+=Math.floor(Math.random()*10);
    }
      console.log(t);
      return t;
  },
    zShouji:function () {
    var x=$('#shouJi').val();
    if(x==null||x=="") {
      //alert('手机号不能为空！');
      $("#shouJiK").show();
      setTimeout('$("#shouJiK").hide()',3000);
      return false;
    }
    else{
      if(/^1[3578]\d{9}$/.test(x)==false){
        //alert('手机号格式有误！');
        $("#shouJiF").show();
        setTimeout('$("#shouJiF").hide()',3000);
        return false;
      }
      else{
        return true;
      }
    }
  },
    zPassword:function () {
      var x=$('#password').val();
      var patrn=/^(\w){6,16}$/;
      if(x==''||x==null){
        $('#password').removeClass('borderGreen');
        $('#password').addClass('borderRed');
        $('#mimaK').show();
        setTimeout('$("#mimaK").hide()',3000);
        return false
      }
      else if(!patrn.exec(x)){
        $('#password').removeClass('borderGreen');
        $('#password').addClass('borderRed');
        $('#mimaF').show();
        setTimeout('$("#mimaF").hide()',3000);
        return false;
      }
      $('#password').removeClass('borderRed');
      $('#password').addClass('borderGreen');
      return true;
    },
    zPasswordS:function () {
      var x=$('#passwordS').val();
      if(x==''||x==null){
        $('#passwordS').removeClass('borderGreen');
        $('#passwordS').addClass('borderRed');
        $('#mimaSK').show();
        setTimeout('$("#mimaSK").hide()',3000);
        return false
      }
      else if(x!=$('#password').val()){
        $('#passwordS').removeClass('borderGreen');
        $('#passwordS').addClass('borderRed');
        $('#mimaSF').show();
        setTimeout('$("#mimaSF").hide()',3000);
        return false
      }
      $('#passwordS').removeClass('borderRed');
      $('#passwordS').addClass('borderGreen');
      return true;
    },
    cutTel:function (value) {
      var tel=value;
      var newTel = tel.substr(0, 3) + '****' + tel.substr(7);
      return newTel;
    }
  }
})();
