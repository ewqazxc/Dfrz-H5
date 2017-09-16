/**
 * Created by Administrator on 2017/8/28.
 *  account {"userID":"15860525235","password":"123456"}
 */
(function () {
  'use strict';
  var products = [];
  $(function () {
    var ACCOUNT_KEY = 'accounts';
    var accounts=store.get(ACCOUNT_KEY,[]);
    var countdown = 60;
    var t = '';

    /**
     * 发送短信，倒计时
     * */
    function settime(obj) {
      if (countdown == 0) {
        obj.removeAttribute("disabled");
        obj.value = "发送短信";
        countdown = 60;
        return;
      } else {
        obj.setAttribute("disabled", true);
        obj.value = "重新发送(" + countdown + ")";
        countdown--;
      }
      setTimeout(function () {
          settime(obj)
        }
        , 1000)
    }

    /**
     * 验证码验证函数
     * */
    function zVcode() {
      var vcode=$('#vCode').val();
      if (vcode==''){
        $("#codeK").show();
        setTimeout('$("#codeK").hide()',3000);
        return false;
      }
      else if (vcode!=t){
        $("#codeF").show();
        setTimeout('$("#codeF").hide()',3000);
        return false;
      }
      return true;
    }

    /**
     * 验证码，焦点验证
     * */
    $('#vCode').blur(function () {
      var vcode=$('#vCode').val();
      if (vcode==''){
        $("#tip3").show();
        $("#tip4").hide();
        $('#vCode').removeClass('borderGreen');
        $('#vCode').addClass('borderRed');
        return false;
      }
      else if (vcode!=t){
        $("#tip4").show();
        $("#tip3").hide();
        $('#vCode').removeClass('borderGreen');
        $('#vCode').addClass('borderRed');
        return false;
      }
      $("#tip4").hide();
      $("#tip3").hide();
      $('#vCode').removeClass('borderRed');
      $('#vCode').addClass('borderGreen');
      return true;
    });

    /**
     * 手机号，焦点验证
     * */
    $('#shouJi').blur(function () {
      var x=$('#shouJi').val();
      if(x==null||x=="") {
       $('#tip1').show();
        $('#tip2').hide();
        $('#userID').removeClass('borderGreen');
        $('#shouJi').removeClass('borderGreen');
        $('#userID').addClass('borderRed');
        $('#shouJi').addClass('borderRed');
        return false;
      }
      else{
        if(/^1[3578]\d{9}$/.test(x)==false){
          //alert('手机号格式有误！');
          $("#tip2").show();
          $('#tip1').hide();
          $('#phoneCode button').removeClass('borderGreen');
          $('#shouJi').removeClass('borderGreen');
          $('#phoneCode button').addClass('borderRed');
          $('#shouJi').addClass('borderRed');
          return false;
        }
        else{
          $("#tip2").hide();
          $('#tip1').hide();
          $('#phoneCode button').removeClass('borderRed');
          $('#shouJi').removeClass('borderRed');
          $('#phoneCode button').addClass('borderGreen');
          $('#shouJi').addClass('borderGreen');
          return true;
        }
      }
    });

    /**
     * 选择国家
     * */
    $('#country').on('click', 'a', function () {
      $('#city button')[0].innerText = $(this)[0].innerText;
      $('#city').removeClass('open');
      return false;
    });

    /**
     * 验证手机号，生成验证码，后台发送
     * 需取消Authorization 的注释
     * 后台可查看验证码
     * */
    $('#sendCode').on('click', function () {
      if (!$.xc.zShouji()) return;
      settime(this);
      var name = 'H5锐智XC';
      function randomNum(n) {
        for (var i = 0; i < n; i++) {
          t += Math.floor(Math.random() * 10);
        }
        console.log('yzm:'+t);
        return t;
      }
      var randomNum=randomNum(4);
      var MD5=hex_md5(randomNum);
      var ParamString = '{"yzm":"' + randomNum + '"}';
      $.ajax({
        url: 'http://sms.market.alicloudapi.com/singleSendSms',
        type: 'GET',
        dataType: 'json',
        data: {
          ParamString: ParamString,
          //ParamString:'{"yzm":"1234"}',
          RecNum: $('#shouJi').val(),
          //RecNum:'15860525235',
          SignName: name,
          TemplateCode: 'SMS_94495041'
        }
        ,
        headers: {
          /*↓**↓**↓**↓**↓**↓**↓**↓**↓**↓**↓**↓**↓**↓**↓*/
          //Authorization: 'APPCODE ea5ec4c3b9b146959bcefa3ba3f2c122'
        }
      }).done(function (data) {
        console.log(data);
        if(data.success==false){
          $("#sendF").show();
          setTimeout('$("#sendF").hide()',3000);
        }
        else  if(data.success==true){
          $("#sendT").show();
          setTimeout('$("#sendT").hide()',3000);
        }
        console.log('randomNum:'+randomNum);
        console.log('MD5:'+MD5);
      });
    });

    /**
     * 验证手机号，验证码
     * 弹出设置密码
     * */
    $('#res').on('click',function () {
      if(!$.xc.zShouji()){
        return;
      }
      else if(!zVcode()){
        return;
      }
     $('#inPass').show();
    });

    /**
     * 验证设置密码
     */
    $('#password').blur(function () {
      if(!$.xc.zPassword()) return;
    });

    /**
     * 验证确认密码
     * */
    $('#passwordS').blur(function () {
      if(!$.xc.zPasswordS()) return;
    });

    /**
     * 关闭设置密码
     * */
    $('#btnCancel').on('click',function () {
      $('#inPass').hide();
    });

    /**
     * 验证密码格式
     * 保存数据至后台
     * 跳转至登录页
     * */
    $('#btnSave').on('click',function () {
      if(!$.xc.zPassword()) return;
      if(!$.xc.zPasswordS()) return;
      $('#inPass').hide();
      var account = {userID:$('#shouJi').val(),password:$('#password').val()};
      accounts.push(account);
      store.update(ACCOUNT_KEY,accounts);
      $('#regSuccess').show();
      setTimeout('$("#regSuccess").hide()',3000);
      var ACCOUNT_KEY2 = 'login';
      var login=true;
      store.update(ACCOUNT_KEY2,login);
      var ACCOUNT_KEY3 = 'loginUser';
      var loginUser=$('#shouJi').val();
      store.update(ACCOUNT_KEY3,loginUser);
      window.location.href="../account/XMSC.html"
    });

    /**
     * 获取地区代码
     * */
    /*    $.getJSON('../JSON/countryCode.json', function (data) {
     products = data;
     console.log(data);
     var html1 = "";
     var html2 = "";
     for (var i = 0, len = products.length; i < len; i++) {
     html1 += '<a class="list-group-item" href="">'+ products[i].country +'</a>';
     /!*        html2 += '<a class="list-group-item" href="">' + products[i].code + '</a>';*!/
     }
     /!*      for(category in data){
     html2 += '<h4>'+ category +'</h4>';
     html2 += '<div class="list-group">';
     for(var i = 0, len = data[category].length; i < len; i++){
     html2+='<a class="list-group-item" href="#">'+ data[category][i].C +'</a>'
     }
     html2+='</div>'
     }*!/
     $('#country').html(html1);
     /!*      $('#code').html(html2);*!/
     });*/
  })
})();

