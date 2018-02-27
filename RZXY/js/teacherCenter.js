(function() {
	$(function() {
		var tchName = $("#tchName");
		var tchTel = $("#tchTel");
		var icon = " <span class='glyphicon glyphicon-edit'></span>";
		var name = localStorage.getItem("讲师@xc用户名@xc");
		var tel = localStorage.getItem("讲师@xc联系电话@xc");
		//使用本地存储的讲师用户名
		if(name != null) {
			tchName[0].innerHTML = name + icon;
		};
		//使用本地存储的讲师联系电话
		if(tel != null) {
			tchTel[0].innerText = tel;
		};
		//修改手机号
		tchTel.on("click", function() {
			var value = "讲师@xc";
			localStorage.setItem("history@xc", value);
			self.location.href = "changeTel.html";
		});
		//修改用户名
		tchName.on("click", function() {
			var value = "讲师@xc";
			localStorage.setItem("history@xc", value);
			self.location.href = "changeName.html";
		});
	})
})();