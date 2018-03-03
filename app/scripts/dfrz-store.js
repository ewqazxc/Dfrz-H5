/**
 * Created by Administrator on 2017/9/9.
 */
var store = (function () {
  'use strict';
  return {
    get: function (key, defaultValue) {
      var val = localStorage.getItem(key);
      try {
        val = JSON.parse(val);
      }
      catch (error) {
        val = null;
      }
      if (defaultValue && val === null) {
        val = defaultValue;
      }
      return val;
    },  //获取本地存储的数据
    update: function (key, value) {
      if(value){
        localStorage.setItem(key,JSON.stringify(value));
      }
    },      //更新本地存储的数据
    add:function (key, value) {
      this.update(key,value);
    },          //添加数据
    remove:function (key) {
      localStorage.removeItem(key);
    }               //删除数据
  };
})();
