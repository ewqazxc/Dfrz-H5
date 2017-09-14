/**
 * Created by Administrator on 2017/9/9.
 */
(function () {
  'use strict';
  $(function () {
    /**
     * 用户名，密码
     * 验证函数
     * */
    function zuserID(userID,password) {
      var x=$('#userID').val();
      var y=$('#password').val();
      if(x==''||x==null){
        $("#shouJiK").show();
        setTimeout('$("#shouJiK").hide()',3000);
        return false;
      }
      else if(y==''||y==null){
        $("#passwordK").show();
        setTimeout('$("#passwordK").hide()',3000);
        return false;
      }
      else if(x!=userID){
        $("#shouJiF").show();
        setTimeout('$("#shouJiF").hide()',3000);
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
    
    /**
     * 获取本地存储信息，验证用户名，密码
     * 登录成功时，保存登录状态、登录用户至本地存储
     * */
    $('#btnLogin').on('click',function () {
      var ACCOUNT_KEY='accounts';
      var accounts=store.get(ACCOUNT_KEY,[]);
      console.log(accounts);
      for(var i=0,len=accounts.length;i<len;i++){
        var userID=accounts[i].userID;
        var password=accounts[i].password;
        if(!zuserID(userID,password)){
         continue;
        }
        else {
          var ACCOUNT_KEY2 = 'login';
          var login=true;
          store.update(ACCOUNT_KEY2,login);
          var ACCOUNT_KEY3 = 'loginUser';
          var loginUser=userID;
          store.update(ACCOUNT_KEY3,loginUser);
          console.log(loginUser);
          $('#logSuccess').show();
          setTimeout('$("#logSuccess").hide()',3000);
          window.location.href="../account/XMSC.html";
        }
      }
      return false;
    });
    
    /**
     * 用户名、密码
     * 焦点验证
     * */
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
      var patrn=/^(\w){6,18}$/;
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
