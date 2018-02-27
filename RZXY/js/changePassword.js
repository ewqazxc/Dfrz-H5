(function() {
  $(function() {
    var input = $("#passWord input");
    var inputS = $("#sureWord input");
    var sureBtn = $("#sureBtn");
    var sendBtn = $("#sendBtn");
    var wordShow = $("#passWord .wordShow");
    var wordShowS = $("#sureWord .wordShow");
    var wordText = "<i class='wordText'></i>"
    var password = "";
    var sureword = "";
    var history = localStorage.getItem("history@xc");
    var yzNum = "123456";
    var sec = 30;
    //发送验证码
    function send() {
      var yzTime = setInterval(function() {
        sendBtn.text(sec + "s后，重新发送");
        sec -= 1;
        if(sec < 0) {
          sec = 30;
          clearInterval(yzTime);
          sendBtn.text("重新发送");
          sendBtn.bind("click",send);
        }
      }, 1000);
      sendBtn.unbind("click",send);
      console.log(sendBtn);
    }
    sendBtn.bind("click",send);
    //确定验证码
    sureBtn.on("click", function() {
      if($("#yzNum").val() == yzNum) {
        return true;
      }else if($("#yzNum").val()==""||$("#yzNum").val()==null) {
         $("#yzKong").show();
      setTimeout(function() {
        $("#yzKong").hide();
      }, 1000)
      return false;
      }
      $("#yzFail").show();
      setTimeout(function() {
        $("#yzFail").hide();
      }, 1000)
      return false;
    })
    //获取输入框焦点
    $('#changeModal').on('shown.bs.modal', function(e) {
      $(input[0]).focus();
      $(input[0]).val("");
    });
    wordShow.on("click", function() {
      $(input[0]).focus();
    });
    wordShowS.on("click", function() {
      $(inputS[0]).focus();
    });
    //输入密码
    input[0].addEventListener("keyup", function() {
      for(var i = 0, len = wordShow.length; i < len; i++) {
        wordShow[i].innerHTML = "";
      }
      for(var i = 0, len = input[0].value.length; i < len; i++) {
        wordShow[i].innerHTML = wordText;
      }
      if(input[0].value.length == 6) {
        password = input[0].value;
        console.log($("#myModalLabel"))
        $("#passWord").hide();
        $("#myModalLabel")[0].innerText = "请再次输入密码";
        $("#sureWord").css("display", "flex");
        $(inputS[0]).focus();
        $(inputS[0]).val("");
      }
    });
    //再次输入密码
    inputS[0].addEventListener("keyup", function() {
      console.log(inputS[0].value.length)
      for(var i = 0, len = wordShowS.length; i < len; i++) {
        wordShowS[i].innerHTML = "";
      }
      for(var i = 0, len = inputS[0].value.length; i < len; i++) {
        wordShowS[i].innerHTML = wordText;
      }
      if(inputS[0].value.length == 6) {
        sureword = inputS[0].value;
        if(sureword == password) {
          localStorage.setItem(history + "password@xc", password);
          $("#success").show();
          setTimeout(function() {
            if(history == "讲师@xc") {
              self.location.href = "../personalCenter/teacherCenter.html";
            } else {
              self.location.href = "../personalCenter/studentCenter.html";
            }
          }, 1000)
        } else {
          $("#fail").show();
          setTimeout(function() {
            $("#fail").hide();
          }, 1000)
          return false;
        }
      }
    })

    /*for(var i = 0, len = input.length; i < len; i++) {
    	input[i].addEventListener("keyup", function() {
    		$(this).next().focus();
    		password += this.value;
    		console.log(password)
    		if(password.length > 5) {
    			console.log($("#myModalLabel"));
    			//change();
    			return false;
    		}
    	});
    }*/
  })
})();