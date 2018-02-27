(function() {
	$(function() {
		var sortNumber = $("#sortNumber input");
		var sortNumberCut = $("#sortNumberCut");
		var sortNumberAdd = $("#sortNumberAdd");
		var count = sortNumber[0].value;
		//购买数量+-
		sortNumberCut.on("click", function() {
			count--;
			if(count < 1) {
				$("#sortNumberTip").show();
				setTimeout(function() {
					$("#sortNumberTip").hide();
				}, 1000)
				count = 1;
			} else {
				sortNumber[0].value = count;
			}
		});
		sortNumberAdd.on("click", function() {
			count++;
			sortNumber[0].value = count;
		});
		//单节课程购买数量1
		var signIn1Number = $("#signIn1-sortNumber input");
		var signIn1Cut = $("#signIn1-sortNumberCut");
		var signIn1Add = $("#signIn1-sortNumberAdd");
		var signIn1count = signIn1Number[0].value;
		signIn1Cut.on("click", function() {
			signIn1count--;
			if(signIn1count < 1) {
				$("#signIn1-sortNumberTip").show();
				setTimeout(function() {
					$("#signIn1-sortNumberTip").hide();
				}, 1000)
				signIn1count = 1;
			} else {
				signIn1Number[0].value = signIn1count;
			}
		});
		signIn1Add.on("click", function() {
			signIn1count++;
			signIn1Number[0].value = signIn1count;
		});
		//单节课程购买数量2
		var signIn2Number = $("#signIn2-sortNumber input");
		var signIn2Cut = $("#signIn2-sortNumberCut");
		var signIn2Add = $("#signIn2-sortNumberAdd");
		var signIn2count = signIn2Number[0].value;
		signIn2Cut.on("click", function() {
			signIn2count--;
			if(signIn2count < 1) {
				$("#signIn2-sortNumberTip").show();
				setTimeout(function() {
					$("#signIn2-sortNumberTip").hide();
				}, 1000)
				signIn2count = 1;
			} else {
				signIn2Number[0].value = signIn2count;
			}
		});
		signIn2Add.on("click", function() {
			signIn2count++;
			signIn2Number[0].value = signIn2count;
		});
		//缴费天数
		var optDays = $("#optDays").children();
		for(var i = 0, len = optDays.length; i < len; i++) {
			optDays[i].onclick = function() {
				if(this.className == "active") {
					this.className = "active"
				} else {
					for(var i = 0, len = optDays.length; i < len; i++) {
						if(optDays[i].className=="active") {
							optDays[i].className = "active";
						}else {
							optDays[i].className = "";
						}
					}
					this.className = "active checked";
				}
			}
		}
	})
})();