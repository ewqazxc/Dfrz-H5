/**
 * Created by Administrator on 2017/9/11.
 */
(function () {
  'use strict';
  $(function () {
    $(document).ready(function() {
      var t=localStorage.getItem('address');
      if(t==''||t==null){
        return false;
      }
      else {
        var jsonObj=eval('('+t+')');
        var adrName=jsonObj.adrName;
        var adrTel=jsonObj.adrTel;
        var adrCode=jsonObj.adrCode;
        var adrTip=jsonObj.adrTip;
        var cmbProvince=jsonObj.cmbProvince;
        var cmbCity=jsonObj.cmbCity;
        var cmbArea=jsonObj.cmbArea;
        var adrAddress=jsonObj.adrAddress;
        var html = '';
        html = '<div class="address col-xs-3 col-md-3 btn ">' +
            '<h3>'+adrName+'</h3>' +
            '<p><tel>'+$.xc.cutTel(adrTel)+'</tel></p>' +
            '<p><span>'+cmbProvince+'</span><span>'+cmbCity+'</span><span>'+cmbArea+'</span></p>' +
            '<p>'+adrAddress+'</p>' +
            '<p>邮编：'+adrCode+'  标签：'+adrTip+'</p>' +
            '<div class="text-right">' +
            '<a href="" data-toggle="modal" data-target="#addressChange">修改</a>' +
            '<a class="delAdr" href="#">删除</a></div></div>';
          $('#address').append(html);
        return true;
      }
    });
    function zTel(tel) {
      var x=$(tel)[0].value;
      var patrn=/^1[3578]\d{9}$/;
      if(x==''||x==null){
        //alert('手机号不能为空！');
        $(tel).addClass('borderRed');
        return false;
      }
      else if(!patrn.exec(x)){
        $(tel).addClass('borderRed');
        return false;
      }
      $(tel).removeClass('borderRed');
      $(tel).addClass('borderGreen');
      return true;
    }
    function zName(name) {
      var x=$(name)[0].value;
      if(x==''||x==null){
        //alert('姓名不能为空！');
        $(name).addClass('borderRed');
        $(name).removeClass('borderGreen');
        return false;
      }
      $(name).addClass('borderGreen');
      $(name).removeClass('borderRed');
      return true;
    }
    function zAddress(address) {
      var x=$(address)[0].value;
      if(x==''||x==null){
        //alert('地址不能为空！');
        $(address).addClass('borderRed');
        $(address).removeClass('borderGreen');
        return false;
      }
      $(address).addClass('borderGreen');
      $(address).removeClass('borderRed');
      return true;
    }
    $('#adrBtnSave').on('click', function () {
      /*  console.log($('#adrName')[0].value);
       console.log($('#adrTel')[0].value);
       console.log($('#adrCode')[0].value);
       console.log($('#adrTip')[0].value);
       console.log($('#cmbProvince')[0].value);
       console.log($('#cmbCity')[0].value);
       console.log($('#cmbArea')[0].value);
       console.log($('#adrAddress')[0].value);*/
      var adrName = $('#adrName')[0].value;
      var adrTel = $('#adrTel')[0].value;
      var adrCode = $('#adrCode')[0].value;
      var adrTip = $('#adrTip')[0].value;
      var cmbProvince = $('#cmbProvince')[0].value;
      var cmbCity = $('#cmbCity')[0].value;
      var cmbArea = $('#cmbArea')[0].value;
      var adrAddress = $('#adrAddress')[0].value;
      //console.log($.xc.cutTel(adrTel));
      if(!zName('#adrName')) return;
      if(!zTel('#adrTel')) return;
      if(!zAddress('#adrAddress')) return;
      var html = '';
      html = '<div class="address col-xs-3 col-md-3 btn ">' +
        '<h3>'+adrName+'</h3>' +
        '<p><tel>'+$.xc.cutTel(adrTel)+'</tel></p>' +
        '<p><span>'+cmbProvince+'</span><span>'+cmbCity+'</span><span>'+cmbArea+'</span></p>' +
        '<p>'+adrAddress+'</p>' +
        '<p>邮编：'+adrCode+'  标签：'+adrTip+'</p>' +
        '<div class="text-right">' +
        '<a href="" data-toggle="modal"data-target="#addressChange">修改</a><a class="delAdr" href="#">删除</a></div></div>';
      $('#address').append(html);
      var address = {adrName:adrName,adrTel:adrTel,adrCode:adrCode,
        adrTip:adrTip,cmbProvince:cmbProvince,cmbCity:cmbCity,cmbArea:cmbArea,adrAddress:adrAddress};
      var ACCOUNT_KEY = 'address';
      store.update(ACCOUNT_KEY,address);
      $('#addressModal').modal('hide');
    });
    $('#changeBtnSave').on('click',function () {
      if(!zName('#changeName')) return;
      if(!zTel('#changeTel')) return;
      if(!zAddress('#changeAddress')) return;
      $('#addressChange').modal('hide');
    });
    $('#address').on('click','.delAdr', function () {
      console.log(localStorage);
      var ACCOUNT_KEY = 'address';
      store.remove(ACCOUNT_KEY);
      window.location.reload();
      return false;
    });
    $('#adrTel').blur(function () {
      zTel($('#adrTel'));
    });
    $('#adrName').blur(function () {
      zName($('#adrName'));
    });
    $('#adrAddress').blur(function () {
      zAddress($('#adrAddress'));
    });
  })
})();
