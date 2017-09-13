/**
 * Created by Administrator on 2017/9/11.
 */
(function () {
  'use strict';
  $(function () {
    var ACCOUNT_KEY = 'addresses';
    var addresses=store.get(ACCOUNT_KEY,[]);
    $(document).ready(function() {
      var html = '';
      for(var i=0,len=addresses.length;i<len;i++){
        html+='<div id="userAddress'+ i +'"'+' class="newAddress address col-xs-3 col-md-3 btn ">' +
          '<h3>'+addresses[i].adrName+'</h3>' +
          '<p><tel>'+$.xc.cutTel(addresses[i].adrTel)+'</tel></p>' +
          '<p><span>'+addresses[i].cmbProvince+'</span><span>'+addresses[i].cmbCity+'</span><span>'+addresses[i].cmbArea+'</span></p>' +
          '<p>'+addresses[i].adrAddress+'</p>' +
          '<p>邮编：'+addresses[i].adrCode+'  标签：'+addresses[i].adrTip+'</p>' +
          '<div class="text-right">' +
          '<a class="changeAdr" data-id="'+ i +'" href="" data-toggle="modal" data-target="#addressChange">修改</a>' +
          '<a class="delAdr" data-id="'+ i +'" href="#">删除</a></div></div>';
      }
          $('#address').append(html);
          return true;
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
    function zCode(code) {
      var x=$(code)[0].value;
      var patrn=/^[a-zA-Z0-9 ]{3,12}$/;
      if(x==''||x==null){
        $(code).addClass('borderRed');
        $(code).removeClass('borderGreen');
        return false;
      }
      else if(!patrn.exec(x)){
        $(code).addClass('borderRed');
        return false;
      }
      $(code).addClass('borderGreen');
      $(code).removeClass('borderRed');
      return true;
    }
    $('#adrBtnSave').on('click', function () {
      var adrName = $('#adrName')[0].value;
      var adrTel = $('#adrTel')[0].value;
      var adrCode = $('#adrCode')[0].value;
      var adrTip = $('#adrTip')[0].value;
      var province = $('#cmbProvince')[0].value;
      var cmbProvince = $('#cmbProvince')[0][province].text;
      var city = $('#cmbCity')[0].value;
      var cmbCity = $('#cmbCity')[0][city].text;
      var area = $('#cmbArea')[0].value;
      var cmbArea = $('#cmbArea')[0][area].text;
      var adrAddress = $('#adrAddress')[0].value;
      var i=addresses.length;console.log(i);
      if(!zName('#adrName')) return;
      if(!zTel('#adrTel')) return;
      if(!zAddress('#adrAddress')) return;
      if(!zCode('#adrCode')) return;
      var html = '';
      html = '<div id="userAddress'+ i +'"'+' class="newAddress address col-xs-3 col-md-3 btn ">' +
        '<h3>'+adrName+'</h3>' +
        '<p><tel>'+$.xc.cutTel(adrTel)+'</tel></p>' +
        '<p><span>'+cmbProvince+'</span><span>'+cmbCity+'</span><span>'+cmbArea+'</span></p>' +
        '<p>'+adrAddress+'</p>' +
        '<p>邮编：'+adrCode+'  标签：'+adrTip+'</p>' +
        '<div class="text-right">' +
        '<a data-id="'+ i +'"  href="" data-toggle="modal" data-target="#addressChange">修改</a>' +
        '<a data-id="'+ i +'"  class="delAdr" href="#">删除</a></div></div>';
      $('#address').append(html);
      var address = {adrName:adrName,adrTel:adrTel,adrCode:adrCode,
        adrTip:adrTip,cmbProvince:cmbProvince,cmbCity:cmbCity,cmbArea:cmbArea,adrAddress:adrAddress};
      addresses.push(address);
      store.update(ACCOUNT_KEY,addresses);
      $('#addressModal').modal('hide');
      //window.location.reload();
    });
    $('#changeBtnSave').on('click',function () {
      console.log($(this).attr('data-id'));
      var dataId=$(this).attr('data-id');
      var changeName = $('#changeName')[0].value;
      var changeTel = $('#changeTel')[0].value;
      var changeCode = $('#changeCode')[0].value;
      var changeTip = $('#changeTip')[0].value;
      var changeProvince = $('#changeProvince')[0].value;
      var changeCity = $('#changeCity')[0].value;
      var changeArea = $('#changeArea')[0].value;
      var changeAddress = $('#changeAddress')[0].value;
      if(!zName('#changeName')) return;
      if(!zTel('#changeTel')) return;
      if(!zAddress('#changeAddress')) return;
      if(!zCode('#changeCode')) return;
      var html = '';
      html =
        '<h3>'+changeName+'</h3>' +
        '<p><tel>'+$.xc.cutTel(changeTel)+'</tel></p>' +
        '<p><span>'+changeProvince+'</span><span>'+changeCity+'</span><span>'+changeArea+'</span></p>' +
        '<p>'+changeAddress+'</p>' +
        '<p>邮编：'+changeCode+'  标签：'+changeTip+'</p>' +
        '<div class="text-right">' +
        '<a href="" data-id="'+ dataId +'" data-toggle="modal" data-target="#addressChange">修改</a>' +
        '<a class="delAdr" data-id="'+ dataId +'" href="#">删除</a></div>';
      var userAddress='#userAddress'+ dataId;
      $(userAddress).html(html);
      var address = {adrName:changeName,adrTel:changeTel,adrCode:changeCode,
        adrTip:changeTip,cmbProvince:changeProvince,cmbCity:changeCity,cmbArea:changeArea,adrAddress:changeAddress};
      addresses.splice(dataId,1,address);
      store.update(ACCOUNT_KEY,addresses);
      $('#addressChange').modal('hide');
      //window.location.reload();
    });
    $('#address').on('click','.delAdr', function () {
      console.log(localStorage);
      console.log($(this).attr('data-id'));
      var i=$(this).attr('data-id');
      var ACCOUNT_KEY = 'addresses';
      addresses.splice(i,1);
      store.update(ACCOUNT_KEY,addresses);
      var userAddress='#userAddress'+ i;
      $(userAddress).remove();
      //window.location.reload();
      return false;
    });
    $('#address').on('click','.changeAdr',function () {
      var dataId=$(this).attr('data-id');
      $('#changeBtnSave').attr('data-id',dataId);
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
    $('#adrCode').blur(function () {
      zCode($('#adrCode'));
    });
    $('#changeTel').blur(function () {
      zTel($('#changeTel'));
    });
    $('#changeName').blur(function () {
      zName($('#changeName'));
    });
    $('#changeAddress').blur(function () {
      zAddress($('#changeAddress'));
    });
    $('#changeCode').blur(function () {
      zCode($('#changeCode'));
    });
  })
})();
