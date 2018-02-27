(function() {
  $(function() {
    var changeTel = $(".changeTel");
    var input = $("input");
    var del = $("span");
    var save = $("#save");
    var history = localStorage.getItem("history@xc");
    var historyTel = localStorage.getItem(history + "联系电话@xc");
    //输入框设置历史值
    input[0].value = historyTel;
    //输入框获取焦点时显示删除按钮
    input.on("focus", function() {
      changeTel.addClass("active");
    });
    //点击删除按钮,清空输入框,隐藏删除按钮
    del.on("click", function() {
      input[0].value = "";
      changeTel.removeClass("active");
    });
    //点击保存，将数据存储在本地
    save.on("click", function() {
      var value = input[0].value;
      console.log(value)
      if(value != "") {
        localStorage.setItem(history + "联系电话@xc", value);
        $("#tipOk").show();
        setTimeout(function() {
          if(history == "讲师@xc") {
            self.location.href = "../personalCenter/teacherCenter.html";
          } else {
            self.location.href = "../personalCenter/studentCenter.html";
          }
        }, 1000);
      } else {
        $("#tipTel").show();
        setTimeout(function() {
          $("#tipTel").hide();
        }, 1000);
        return false;
      }
    });
  })
})();