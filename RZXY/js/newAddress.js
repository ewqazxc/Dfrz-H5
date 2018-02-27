(function() {
  $(function() {
    //地址选取
    if($('.linkage_el').length) {
      $('.linkage_el').linkage();
    };
    //省市区获取
    ssq();
    //查询本地/Url数据
    var addressListObj = localStorage.getItem("addressList@xc");
    /*var editCard = localStorage.getItem("editCard@xc");*/
    var editCard = getRequest();
    var thisSave = 1;
    console.log(editCard);
    //添加/编辑
    if(editCard == 'add') {
      thisSave = 0;
      $('.header-title').html('添加新地址');
    } else {
      thisSave = 1;
      $('.header-title').html('编辑地址');
    }

    var addressList = [];
    if(addressListObj == "" || addressListObj == null) {
      addressList = [];
    } else {
      addressList = eval("(" + addressListObj + ")");
    }
    var id = 0;
    //默认值
    var edName = "";
    var edTel = "";
    var edAddress = "";
    var edDistrict = "";
    var edFullAddress = "";
    if(editCard != "" && editCard != null) {
      for(var i = 0, len = addressList.length; i < len; i++) {
        if(addressList[i].id == editCard) {
          console.log(addressList[i]);
          edName = addressList[i].contacts;
          edTel = addressList[i].contactsTel;
          edAddress = addressList[i].address;
          edDistrict = addressList[i].street;
          edFullAddress = addressList[i].fullAddress;
          if(addressList[i].checked == "active") {
            $("#checkBox").addClass("active");
          }
          break;
        }
      }
    }
    $("#contacts").val(edName);
    $("#contactsTel").val(edTel);
    $("#address").text(edAddress);
    $("#streetOn").text(edDistrict);
    $("#fullAddress").val(edFullAddress);

    //默认地址单选框
    $("#checkBox").on("click", function() {
      if($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this).addClass("active");
      }
    });
    //保存
    $("#saveBtn").on("click", function() {
      var contacts = $("#contacts").val();
      var contactsTel = $("#contactsTel").val();
      var address = $("#address").text();
      var street = $("#streetOn").text();
      var fullAddress = $("#fullAddress").val();
      //联系人
      if(contacts == "" || contacts == null) {
        $("#tipName").show();
        setTimeout(function() {
          $("#tipName").hide();
        }, 1000)
        return false;
      }
      //联系电话
      if(contactsTel == "" || contactsTel == null) {
        $("#tipTel").show();
        setTimeout(function() {
          $("#tipTel").hide();
        }, 1000)
        return false;
      }
      //详细地址
      if(fullAddress == "" || fullAddress == null) {
        $("#tipFull").show();
        setTimeout(function() {
          $("#tipFull").hide();
        }, 1000)
        return false;
      }
      var checked = "";
      if($("#checkBox").hasClass("active")) {
        checked = "active";
        for(var i = 0, len = addressList.length; i < len; i++) {
          addressList[i].checked = "";
        }
      } else {
        checked = "";
      }
      if(thisSave == 0) {
        if(addressList.length > 0) {
          id = addressList[addressList.length - 1].id + 1;
        }
        var addressCard = {
          "id": id,
          "contacts": contacts,
          "contactsTel": contactsTel,
          "address": address,
          "street": street,
          "fullAddress": fullAddress,
          "checked": checked
        };
        addressList.push(addressCard);
      } else {
        for(var i = 0, len = addressList.length; i < len; i++) {
          if(addressList[i].id == editCard) {
            var sid = addressList[i].id;
            addressList[i] = {
              "id": sid,
              "contacts": contacts,
              "contactsTel": contactsTel,
              "address": address,
              "street": street,
              "fullAddress": fullAddress,
              "checked": checked
            }
          }
        }
      }
      localStorage.setItem("addressList@xc", JSON.stringify(addressList));
      rankId();
      self.location.href = "address.html"
    });
    //删除
    if(thisSave == 0) {
      $("#delBtn").closest('.editCard').hide();
    } else {
      $("#delBtn").on("click", function() {
        for(var i = 0, len = addressList.length; i < len; i++) {
          addressList.splice(i, 1);
          break;
        }
        localStorage.setItem('addressList@xc', JSON.stringify(addressList));
        rankId();
        $("#tipClear").show();
        setTimeout(function() {
          $("#tipClear").hide();
          self.location.href = "address.html";
        }, 1000);
        return false;
      })
    }

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
  /**
   * 获取url信息
   * */
  function getRequest() {
    var url = location.search;
    if(url.indexOf("?" != -1)) {
      var str = url.substr(1);
      strs = str.split("=");
      return strs[1];
    }
  }

  function ssq() {
    var Area = [];
    /**
     * 获取地区数据
     * */
    $.getJSON('../JSON/area.json', function(data) {
      //console.log(data);
      Area = data;
      var html = '';
      var html2 = '';
      var html3 = '';
      for(var i = 0, len = Area.length; i < len; i++) {
        html += '<option value="' + i + '">' + Area[i].name + '</option>';
      }
      $('#prov').html(html);
      var val = $('#prov')[0].value;
      for(var i = 0, len = Area[val].cityList.length; i < len; i++) {
        html2 += '<option value="' + i + '">' + Area[val].cityList[i].name + '</option>';
      }
      $('#city').html(html2);
      var val2 = $('#city')[0].value;
      for(var i = 0, len = Area[val].cityList[val2].areaList.length; i < len; i++) {
        html3 += '<option value="' + i + '">' + Area[val].cityList[val2].areaList[i] + '</option>';
      }
      $('#district').html(html3);
    });
    /**
     * 改变省份时，后续联动
     * */
    $('#prov').on('change', function() {
      var x = $('#prov')[0].value;
      var html = '';
      for(var i = 0, len = Area[x].cityList.length; i < len; i++) {
        html += '<option value="' + i + '">' + Area[x].cityList[i].name + '</option>';
      }
      $('#city').html(html);
      var y = $('#city')[0].value;
      var html2 = '';
      for(var i = 0, len = Area[x].cityList[y].areaList.length; i < len; i++) {
        html2 += '<option value="' + i + '">' + Area[x].cityList[y].areaList[i] + '</option>';
      }
      $('#district').html(html2);
    });
    /**
     * 改变城市时，后续联动
     * */
    $('#city').on('change', function() {
      var x = $('#prov')[0].value;
      var y = $('#city')[0].value;
      var html = '';
      for(var i = 0, len = Area[x].cityList[y].areaList.length; i < len; i++) {
        html += '<option value="' + i + '">' + Area[x].cityList[y].areaList[i] + '</option>';
      }
      $('#district').html(html);
    })
  }
})();