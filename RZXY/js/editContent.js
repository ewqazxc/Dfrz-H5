(function() {
	$(function() {
		var del = document.getElementById('delete');
		var photos = document.getElementById('photos');
		var img = document.getElementsByTagName('img');
		//移动端拖拽删除
		//监听
		document.addEventListener('touchstart', function(e) {
			 var viewY = document.documentElement.clientHeight;
			 var delY = viewY-$("#delete").height();
		},false);
		for(var i = 0, len = img.length; i < len; i++) {
			img[i].addEventListener('touchstart', function(e) {
				var imgX = e.touches[0].clientX;
				var imgY = e.touches[0].clientY;
				var isRemove = false;
				console.log(imgX, imgY);
				this.addEventListener('touchmove', function(e) {
					e.preventDefault();
					
					var moveX = e.touches[0].clientX - imgX;
					var moveY = e.touches[0].clientY - imgY;
					this.style = "left: " + moveX + "px;top: " + moveY + "px;z-index: 1;";
		
					var viewY = document.documentElement.clientHeight;
			 		var delY = viewY-$("#delete").height();
			 		var moveLine = e.touches[0].clientY;

					if(moveLine>delY) {
						console.log("dele");
						del.style = "background-color:blue";
						return isRemove = true;
					}else {
						del.style = "background-color:#FE353D";
						return isRemove = false;
					}
				}, false);
				this.addEventListener('touchend', function(e) {
					if(isRemove) {
						this.remove();
						del.style = "background-color:#FE353D";
					}else {
						this.style = "left: 0px;top: 0px;";
					}
				}, false);
			}, false);
		}
		//PC端拖拽删除
		for(var i=0,len=img.length;i<len;i++){
		  img[i].draggable = true;
		  img[i].flag =false;
		  img[i].ondragstart = function(){
		    this.flag =true;
		  };
		  img[i].ondragend = function(){
		    this.flag =false;
		  }
		};
		del.ondragenter = function (e) {
		  e.preventDefault();
		};
		del.ondragover = function (e) {
		  e.preventDefault();
		  del.style = "background-color:blue";
		};
		del.ondragleave = function (e) {
		  e.preventDefault();
		  del.style = "background-color:#FE353D";
		};
		del.ondrop = function(e){
		  e.preventDefault();
		  for (var i=0; i<img.length; i++)
		  {   console.log(img[i].flag);
		    if (img[i].flag)
		    {
		      photos.removeChild(img[i]);
		      del.style = "background-color:#FE353D";
		    }
		  }
		}
		/**
		 * 点击发送
		 * */
		var sendBtn = $("#sendBtn");
		sendBtn.on("click", function() {
			location.href = "circleMates.html";
		})
	})
})();