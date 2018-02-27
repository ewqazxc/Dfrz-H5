(function() {
  window.onload = function() {
    var canvas = document.getElementById('rotary');
    var cobj = canvas.getContext('2d');
    var colors = ["#EEEE00", "#EE00EE", "#C0FF3E", "#8B0000", "#68228B", "green", "#CD6600", "#949494"];
    var textArr = ["再来一次", "免费试听", "50元", "100元", "H5视频", "JAVA视频", "试听一节", "H5游戏试玩"];
    cobj.translate(375, 200);
    var angle = 0;
    var step = 10 + 10 * Math.random();
    drawPanK();
    var t;
    var start = document.getElementById("start");

    start.onclick = function(e) {
      t = setInterval(drawPan, 60);
    }

    function drawPanK() {
      if(step <= 0.3) {
        clearInterval(t);
        var textNum = Math.ceil(angle / 45);
        var con = textArr[textArr.length - textNum];

        cobj.save();
        cobj.beginPath();
        cobj.font = "34px 微软雅黑";
        cobj.textAlign = "center";
        cobj.fillText(con, 0, 0);
        cobj.restore();
      } else {
        angle += step;
        step -= 0.2;
        cobj.clearRect(-300, -200, 500, 500);
        //指针
        cobj.lineWidth = 5;
        cobj.moveTo(180, 0);
        cobj.lineTo(195, 0);
        cobj.stroke();
        cobj.lineWidth = 1;

        //转动
        cobj.save();
        cobj.rotate(angle * Math.PI / 180);
        if(angle > 360) {
          angle = 0;
        }
        for(var i = 1; i <= 8; i++) {
          cobj.beginPath();
          cobj.fillStyle = colors[i - 1];
          cobj.moveTo(0, 0);
          cobj.arc(0, 0, 180, (i - 1) * 45 * Math.PI / 180, i * 45 * Math.PI / 180);
          cobj.closePath();
          cobj.stroke();
          cobj.fill();
        }
        //白盘
        cobj.beginPath();
        cobj.arc(0, 0, 80, 0, 2 * Math.PI);
        cobj.fillStyle = "white";
        cobj.fill();
        //文字
        for(var i = 0; i < 8; i++) {
          cobj.save();
          cobj.beginPath();
          cobj.fillStyle = "white";
          cobj.font = "20px 微软雅黑";
          cobj.textBaseline = "bottom";
          cobj.rotate((i * 45 + 30) * Math.PI / 180);
          cobj.fillText(textArr[i], 80, 0);
          cobj.restore();
        }

        cobj.restore();
      }
    }

    function drawPan() {
      if(step <= 0.3) {
        clearInterval(t);
        var textNum = Math.ceil(angle / 45);
        var con = textArr[textArr.length - textNum];

        cobj.save();
        cobj.beginPath();
        cobj.font = "34px 微软雅黑";
        cobj.textAlign = "center";
        cobj.fillText(con, 0, 0);
        cobj.restore();
      } else {
        angle += step;
        step -= 0.2;
        cobj.clearRect(-300, -200, 500, 500);
        //指针
        cobj.lineWidth = 5;
        cobj.moveTo(180, 0);
        cobj.lineTo(195, 0);
        cobj.stroke();
        cobj.lineWidth = 1;

        //转动
        cobj.save();
        cobj.rotate(angle * Math.PI / 180);
        if(angle > 360) {
          angle = 0;
        }
        for(var i = 1; i <= 8; i++) {
          cobj.beginPath();
          cobj.fillStyle = colors[i - 1];
          cobj.moveTo(0, 0);
          cobj.arc(0, 0, 180, (i - 1) * 45 * Math.PI / 180, i * 45 * Math.PI / 180);
          cobj.closePath();
          cobj.stroke();
          cobj.fill();
        }
        //白盘
        cobj.beginPath();
        cobj.arc(0, 0, 80, 0, 2 * Math.PI);
        cobj.fillStyle = "white";
        cobj.fill();
        //文字
        for(var i = 0; i < 8; i++) {
          cobj.save();
          cobj.beginPath();
          cobj.fillStyle = "white";
          cobj.font = "20px 微软雅黑";
          cobj.textBaseline = "bottom";
          cobj.rotate((i * 45 + 30) * Math.PI / 180);
          cobj.fillText(textArr[i], 80, 0);
          cobj.restore();
        }

        cobj.restore();
      }
    }

  }
})();