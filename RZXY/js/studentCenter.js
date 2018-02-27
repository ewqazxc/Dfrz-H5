(function() {
	$(function() {
		var stuName = $("#stuName");
		var stuTel = $("#stuTel");
		var icon = " <span class='glyphicon glyphicon-edit'></span>";
		var name = localStorage.getItem("学生@xc用户名@xc");
		var tel = localStorage.getItem("学生@xc联系电话@xc");
		var useBtn = $("#useBtn");
		//使用本地存储的学生用户名
		if(name != null) {
			stuName[0].innerHTML = name + icon;
		};
		//使用本地存储的学生联系电话
		if(tel != null) {
			stuTel[0].innerText = tel;
		};
		//修改手机号
		stuTel.on("click",function() {
			var value = "学生@xc";
			localStorage.setItem("history@xc",value);
			self.location.href = "changeTel.html";
		});
		//修改用户名
		stuName.on("click",function() {
			var value = "学生@xc";
			localStorage.setItem("history@xc",value);
			self.location.href = "changeName.html";
		});
		//是否使用密码
		useBtn.on("click",function() {
			console.log(useBtn)
			if(useBtn[0].className=="btn-off") {
				useBtn[0].className="btn-on";
			}else {
				useBtn[0].className="btn-off";
			}
		});
		//修改密码
		$("#passwordBtn").on("click",function() {
		  var value = "学生@xc";
      localStorage.setItem("history@xc",value);
		  self.location.href = "changePassword.html";
		});
		//地址管理
		$("#addressCtrl").on("click",function() {
		  var value = "学生@xc";
      localStorage.setItem("history@xc",value);
      self.location.href = "address.html";
		})
	})
})();