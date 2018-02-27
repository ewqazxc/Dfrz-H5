(function() {
	$(function() {
		/**
		 * 照片展示判断
		 * */
		var showImg = $(".showImg");
		for(var i = 0, len = showImg.length; i < len; i++) {
			switch(showImg[i].children.length) {
				case 1:
					showImg[i].children[0].style = "width: 1.6rem;height:1.6rem;";
					break;
				case 2:
					for(var j = 0, len2 = showImg[i].children.length; j < len2; j++) {
						showImg[i].children[j].style = "width: .8rem;height:1.64rem;";
					}
					break;
				case 3:
					for(var j = 0, len3 = showImg[i].children.length; j < len3; j++) {
						switch(j) {
							case 0:showImg[i].children[j].style = "width: .8rem;height:1.64rem;";break;
							case 1:case 2:showImg[i].children[j].style = "width: .8rem;height:.8rem;";break;
						}
					}
					break;
				case 4:
					for(var j = 0, len4 = showImg[i].children.length; j < len4; j++) {
						console.log("4");
						showImg[i].children[j].style = "width: .8rem;height:.8rem;";
					}
					break;
				default:
					console.log("default");
					break;
			}
		}
	})
})();