(function() {
  $(function() {
    /**
     * 判断照片数量
     * */
    var photoShow = $(".photoShow");
    for(var i = 0, len = photoShow.length; i < len; i++) {
      if(photoShow[i].children.length == 4) {
        photoShow[i].classList.add("forthWidth");
      }
    }
    /**
     * 点击discuss
     * */
    var discuss = $('.disOrhandBtn');
    var disOrhand = $(".disOrhand");
    discuss.on("click", function() {
      var pid = $(this).attr("pid");
      //console.log(pid)
      //console.log($("span[pid='disOrhand1']"))
      //console.log($("span[pid='disOrhand" + pid + "']"))
      var change = $("span[pidOr='" + pid + "']");
      if(change.hasClass("noBlock")) {
        change.removeClass("noBlock");
        change.addClass("yesBlock");
      } else {
        change.removeClass("yesBlock");
        change.addClass("noBlock");
      }
    });
    /**
     * 点赞
     * */
    var laudBtn = $(".laudBtn");
    var laud = $(".laud");
    laudBtn.on("click", function() {
      var pid = $(this).attr("pid");
      var change = $("div[pidLaud='" + pid + "']");
      var pidOr = $("span[pidOr='" + pid + "']");
      var html = "<span class='myname' pid='myname" + pid + "'>666</span>"
      if(change.children().hasClass("myname")) {
        $("span[pid=myname" + pid + "]").remove();
        $(this)[0].innerHTML = "<span class='glyphicon glyphicon-heart'></span>赞";
        pidOr.removeClass("yesBlock");
        pidOr.addClass("noBlock");
      } else {
        console.log($(this))
        $(this)[0].innerText = "已赞";
        change.append(html);
        pidOr.removeClass("yesBlock");
        pidOr.addClass("noBlock");
      }
    });
    /**
     * 评论
     * */
    var pingBtn = $(".pingBtn");
    var discuss = $("#discuss");
    var discussModal = $("#discussModal");
    var msgSend = $("#msgSend");
    var disZhao = $("#disZhao");
    pingBtn.on("click", function() {
      var pid = $(this).attr("pid");
      var pidOr = $("span[pidOr='" + pid + "']");
      var html = "<p><a href=''>666</a>：<span>121</span></p>";
      //discuss.append(html);
      discussModal.removeClass("noBlock");
      discussModal.addClass("yesBlock");
      pidOr.removeClass("yesBlock");
      pidOr.addClass("noBlock");
      $("#disZhao").css("display", "block");
    });
    msgSend.on("click", function() {
      discussModal.removeClass("yesBlock");
      discussModal.addClass("noBlock");
      $("#disZhao").css("display", "none");
    });
    disZhao.on("click", function() {
      $("#disZhao").css("display", "none");
      discussModal.removeClass("yesBlock");
      discussModal.addClass("noBlock");
    });
  })
})();