/**
 * Created by Administrator on 2017/9/11.
 */
(function () {
  $(function () {
    /**
     * 页面载入时，检查是否登录
     * 未登录时，直接跳转到登录页面
     * 已登录时，载入部分用户信息
     * */
    $(document).ready(function () {
      var ACCOUNT_KEY1 = 'login';
      var login = store.get(ACCOUNT_KEY1, []);
      if (login == '') {
        $('.noLoginK').show();
        setTimeout('window.location.href="../account/login.html"', 1000);
        // window.location.href="../account/login.html";
      }
      var ACCOUNT_KEY2 = 'loginUser';
      var userID = store.get(ACCOUNT_KEY2, []);
      $('#safeTel').html('安全手机' + ' ' + $.xc.cutTel(userID));
      var ACCOUNT_KEY = 'accountInfo';
      var accountInfo = store.get(ACCOUNT_KEY, accountInfo);
      if (accountInfo == null) {
        return;
      }
      else {
        var nameAcc = accountInfo.name;
        var dateAcc = accountInfo.birthDate;
        var sexAcc = accountInfo.sex;
        $('#nameAcc').html('姓名：' + ' ' + nameAcc);
        $('#dateAcc').html('生日：' + ' ' + dateAcc);
        $('#sexAcc').html('性别：' + ' ' + sexAcc);
      }
    });

    /**
     * 点击保存按钮时，将个人信息数据存入本地
     * */
    $('#btnSave').on('click', function () {
      var changeName = $('#changeName')[0].value;
      var changeDate = $('#changeDate')[0].value;
      var changeSexM = $('#changeSex')[0].children[0].checked;
      var changeSexW = $('#changeSex')[0].children[2].checked;
      var sex = '';
      $('#nameAcc').html('姓名：' + ' ' + changeName);
      $('#dateAcc').html('生日：' + ' ' + changeDate);
      if (changeSexM == true) {
        sex = '男';
        $('#sexAcc').html('性别： 男');
      }
      else if (changeSexW == true) {
        sex = '女';
        $('#sexAcc').html('性别： 女');
      }
      else $('#sexAcc').html('性别:');
      var accountInfo = {name: changeName, birthDate: changeDate, sex: sex};
      var ACCOUNT_KEY = 'accountInfo';
      store.update(ACCOUNT_KEY, accountInfo);
      //window.location.reload();
    });

    /**
     * 点击退出时，清除本地保存的个人信息
     * 打开个人中心界面
     * */
    $('#signOut').on('click', function () {
      var ACCOUNT_KEY = 'accountInfo';
      store.remove(ACCOUNT_KEY, []);
      window.location.reload();
      //return false;
    });
  })
})();
