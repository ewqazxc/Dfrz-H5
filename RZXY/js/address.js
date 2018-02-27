(function() {
  $(function() {
    var content = $("content");
    var addressCard = $(".addressCard");
    //有无已添加地址
    console.log(addressCard.length);
    if(addressCard.length == "0") {
      content.addClass("noAddress");
    } else {
      content.removeClass("noAddress");
    };
    //获取本地数据
    var jsonObj = localStorage.getItem("addressList@xc");
    var addressList = [];
    var contentHtml = "";
    if(jsonObj == "" || jsonObj == null) {
      addressList = [];
      content.html("");
    } else {
      addressList = eval("(" + jsonObj + ")");
      for(var i = 0, len = addressList.length; i < len; i++) {
        var id = addressList[i].id;
        var name = addressList[i].contacts;
        var tel = addressList[i].contactsTel;
        var fullAddress = addressList[i].address + addressList[i].street + addressList[i].fullAddress;
        var nameHtml = name + "<strong>" + tel + "</strong>";
        var checked = addressList[i].checked;
        var checkbox = ""
        if(checked == "active") {
          checkbox = 'checkbox active checked';
        } else {
          checkbox = "checkbox";
        }
        contentHtml += "<div class='addressCard' data-id='" + id + "'>" +
          "<p>" + name + "<strong>" + tel + "</strong></p>" +
          "<p>" + fullAddress + "</p>" +
          "<div>" +
          "<span class='" + checkbox + "'><span class='glyphicon glyphicon-ok'></span></span>" +
          "<span>默认地址</span><a class='delBtn' pid='" + id + "' href='javascript:void(0)'>删除</a>" +
          "<a class='editBtn' href='newAddress.html?id=" + id + "'>编辑</a>" +
          "</div>" +
          "</div>"
      }
      content.html(contentHtml);
      //重新判断有无地址信息
      var checkbox = $(".checkbox");
      var addressCard = $(".addressCard");
      if(addressCard.length == "0") {
        content.addClass("noAddress");
      } else {
        content.removeClass("noAddress");
      };

      //设置默认地址单选框
      for(var i = 0, len = checkbox.length; i < len; i++) {
        checkbox[i].addEventListener("click", function() {
          //||this.className == "checkbox active checked"
          if(this.className == "checkbox active") {
            this.className = "checkbox";
          } else {
            for(var i = 0, len = checkbox.length; i < len; i++) {
              if(checkbox[i].className == "checkbox active") {
                checkbox[i].className = "checkbox active";
              } else {
                checkbox[i].className = "checkbox";
              }
            }
            this.className = "checkbox active checked";
          }
        });
      };

      /*//编辑按钮
      var editBtn = $(".editBtn");
      console.log(editBtn);
      editBtn.on("click", function() {
        console.log(this.getAttribute('pid'));
        var cardId = this.getAttribute('pid');
        localStorage.setItem("editCard@xc", cardId);
        self.location.href = "../personalCenter/newAddress.html"
        return false;
      })*/
      //删除按钮
      content.on("click", ".delBtn", function() {
        var pid = $(this).closest('.addressCard').data('id');
        console.log(pid);
        $(this).closest('.addressCard').remove();
        for(var i = 0, len = addressList.length; i < len; i++) {
          addressList.splice(i, 1);
          break;
        }
        localStorage.setItem('addressList@xc', JSON.stringify(addressList));
        rankId();
        var content = $("content");
        var addressCard = $(".addressCard");
        //有无已添加地址
        console.log(addressCard.length);
        if(addressCard.length == "0") {
          content.addClass("noAddress");
        } else {
          content.removeClass("noAddress");
        };
      });
    }
    /*//添加新地址s
    $("#addBtn").on("click", function() {
      localStorage.setItem("editCard@xc", "");
      self.location.href = "newAddress.html";
    })*/
  });
  /**
   * id排序
   * */
  function rankId() {
    var jsonObj = localStorage.getItem("addressList@xc");
    var addressList = [];
    var contentHtml = "";
    if(jsonObj == "" || jsonObj == null) {
      return false;
    } else {
      addressList = eval("(" + jsonObj + ")");
      var newList = [];
      for(var i = 0, len = addressList.length; i < len; i++) {
        var contacts = addressList[i].contacts;
        var contactsTel = addressList[i].contactsTel;
        var address = addressList[i].address;
        var street = addressList[i].street;
        var fullAddress = addressList[i].fullAddress;
        var checked = addressList[i].checked;
        newList[i] = {
          "id": i,
          "contacts": contacts,
          "contactsTel": contactsTel,
          "address": address,
          "street": street,
          "fullAddress": fullAddress,
          "checked": checked
        };
      }
      localStorage.setItem("addressList@xc", JSON.stringify(newList));
    }
  }
})();