/**
 * Created by Administrator on 2017/9/11.
 */
(function () {
  $(function () {
    $(document).ready(function() {
      var t=localStorage.getItem('accountInfo');
      var t2=localStorage.getItem('account');
      console.log(localStorage.getItem('accountInfo'));
      var jsonObj=eval('('+t+')');
      var jsonObj2=eval('('+t2+')');
      console.log(jsonObj);
      var nameAcc=jsonObj.name;
      console.log(nameAcc);
      var dateAcc=jsonObj.birthDate;
      console.log(dateAcc);
      var sexAcc=jsonObj.sex;
      console.log(dateAcc);
      var userID=jsonObj2.userID;
      $('#nameAcc').html('姓名：'+ ' ' +nameAcc);
      $('#dateAcc').html('生日：'+ ' ' +dateAcc);
      $('#sexAcc').html('性别：'+ ' ' +sexAcc);
      $('#safeTel').html('安全手机'+ ' ' +$.xc.cutTel(userID));
    });
  $('#btnSave').on('click',function () {
    console.log($('#changeName')[0].value);
    console.log($('#changeDate')[0].value);
    console.log($('#changeSex')[0].children[0].checked);
    console.log($('#changeSex')[0].children[2].checked);
    var changeName=$('#changeName')[0].value;
    var changeDate=$('#changeDate')[0].value;
    var changeSexM=$('#changeSex')[0].children[0].checked;
    var changeSexW=$('#changeSex')[0].children[2].checked;
    var sex='';
    $('#nameAcc').html('姓名：'+ ' ' +changeName);
    $('#dateAcc').html('生日：'+ ' ' +changeDate);
    if(changeSexM==true){
      sex='男';
      $('#sexAcc').html('性别： 男');
    }
    else if(changeSexW==true){
      sex='女';
      $('#sexAcc').html('性别： 女');
    }
    else $('#sexAcc').html('性别:');
    var accountInfo = {name:changeName,birthDate:changeDate,sex:sex};
    var ACCOUNT_KEY = 'accountInfo';
    store.update(ACCOUNT_KEY,accountInfo);
  })
  })
})();
