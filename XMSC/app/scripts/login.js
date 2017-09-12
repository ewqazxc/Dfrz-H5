/**
 * Created by Administrator on 2017/9/9.
 */
(function () {
  'use strict';
  $(function () {
    function zuserID(userID,password) {
      var x=$('#userID').val();
      var y=$('#password').val();
      if(x==''){
        $("#shouJiK").show();
        setTimeout('$("#shouJiK").hide()',3000);
        return false;
      }
      else if(x!=userID){
        $("#shouJiF").show();
        setTimeout('$("#shouJiF").hide()',3000);
        return false;
      }
        else if(y==''){
        $("#passwordK").show();
        setTimeout('$("#passwordK").hide()',3000);
        return false;
      }
      else if(y!=password){
        $("#passwordF").show();
        setTimeout('$("#passwordF").hide()',3000);
        return false;
      }
      else
        $("#logSuccess").show();
      setTimeout('$("#logSuccess").hide()',3000);
        return true;
    }
    $('#btnLogin').on('click',function () {
      var t=localStorage.getItem('account');
      console.log(localStorage.getItem('account'));
      var jsonObj=eval('('+t+')');
      console.log(jsonObj);
      var userID=jsonObj.userID;
      console.log(userID);
      var password=jsonObj.password;
      console.log(password);
      if(!zuserID(userID,password)){
        return false;
      }
      var ACCOUNT_KEY = 'login';
      var login=true;
      store.update(ACCOUNT_KEY,login);
      $('#logSuccess').show();
      setTimeout('$("#logSuccess").hide()',3000);
      window.location.href="../account/XMSC.html";
     // return false;
    });
    $('#userID').blur(function () {
      var x=$('#userID').val();
      var phone=/^1[3578]\d{9}$/;
      if(x==null||x=="") {
        $('#tip1').show();
        $('#tip2').hide();
        $('#userID').removeClass('borderGreen');
        $('#userID').addClass('borderRed');
        return false;
      }
        else if(!phone.exec(x)){
        $('#tip2').show();
        $('#tip1').hide();
        $('#userID').removeClass('borderGreen');
        $('#userID').addClass('borderRed');
      }
      else{
        $('#tip2').hide();
        $('#tip1').hide();
        $('#userID').removeClass('borderRed');
        $('#userID').addClass('borderGreen');
        return true;
      }
    });
    $('#password').blur(function () {
      var x=$('#password').val();
      var patrn=/^(\w){6,16}$/;
      if(x==null||x=="") {
        $('#tip3').show();
        $('#tip4').hide();
        $('#password').removeClass('borderGreen');
        $('#password').addClass('borderRed');
        return false;
      }
        else if(!patrn.exec(x)){
        $('#tip4').show();
        $('#tip3').hide();
        $('#password').removeClass('borderGreen');
        $('#password').addClass('borderRed');
      }
      else{
        $('#tip4').hide();
        $('#tip3').hide();
        $('#password').removeClass('borderRed');
        $('#password').addClass('borderGreen');
        return true;
      }
    });
  })
})();
