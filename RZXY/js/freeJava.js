(function() {
  window.onload = function() {
    var video = document.getElementById("videoJava");
    var play = document.getElementById("play");
    //播放/暂停
    function playVideo() {
      if(video.paused) {
        video.play();
        play.className = "pause";
      } else {
        video.pause();
        play.className = "play";
      }
    }
    play.onclick = playVideo;
    video.onclick = playVideo;
    //进度条
    var progress = document.getElementById("progress");
    var proBar = document.getElementById("proBar");
    video.addEventListener("timeupdate", function() {
      var allen = video.duration;
      var atlen = video.currentTime;
      var len = (atlen / allen) * progress.offsetWidth;
      proBar.style.width = len + "px";
      //console.log(len);
    }, false);
    //进度条拖动
    progress.onmousedown = function(e) {
      var ex = e.clientX;
      var vx = ex - progress.offsetLeft;
      var len = vx / progress.offsetWidth;
      console.log(ex, vx, len)
      if(len < 0) {
        len = 0;
      } else if(len > 1) {
        len = 1;
      } else {
        len = len;
      }
      video.currentTime = len * video.duration;
      proBar.style.width = len * progress.offsetWidth + "px";
      progress.onmousemove = function(e) {
        ex = e.clientX;
        vx = ex - progress.offsetLeft;
        len = vx / progress.offsetWidth;
        if(len < 0) {
          len = 0;
        } else if(len > 1) {
          len = 1;
        } else {
          len = len;
        }
        video.currentTime = len * video.duration;
        proBar.style.width = len * progress.offsetWidth + "px";
        //proBar.style.left = len * progress.offsetWidth + "px";
      }
      progress.onmouseup = function() {
        progress.onmousemove = null;
      }
    }
    //声音
    var sound = document.getElementById("sound");
    sound.onclick = function() {
      var len = video.volume * volume.offsetWidth;
      console.log(len)
      if(video.muted) {
        video.muted = false;
        if(video.volume == 1) {
          sound.children[0].className = "glyphicon glyphicon-volume-up";
        } else {
          sound.children[0].className = "glyphicon glyphicon-volume-down";
        }
        volBar.style.width = "."+len+"rem";
        volPot.style.left = "."+len+"rem";
      } else {
        video.muted = true;
        sound.children[0].className = "glyphicon glyphicon-volume-off";
        volBar.style.width = "0px";
        volPot.style.left = "0px";
      }
    }
    //音量
    var volume = document.getElementById("volume");
    var volBar = document.getElementById("volBar");
    var volPot = document.getElementById("volPot");
    volume.onmousedown = function(e) {
      var ex = e.clientX;
      var vx = ex - volume.offsetLeft;
      var len = vx / volume.offsetWidth;
      console.log(ex, vx, len)
      if(len < 0) {
        len = 0;
        video.muted = true;
        sound.children[0].className = "glyphicon glyphicon-volume-off";
      } else if(len > 1) {
        len = 1;
      } else {
        len = len;
        video.muted = false;
        if(video.volume == 1) {
          sound.children[0].className = "glyphicon glyphicon-volume-up";
        } else {
          sound.children[0].className = "glyphicon glyphicon-volume-down";
        }
      }
      video.volume = len;
      volBar.style.width = len * volume.offsetWidth + "px";
      volPot.style.left = len * volume.offsetWidth + "px";
      volume.onmousemove = function(e) {
        ex = e.clientX;
        vx = ex - volume.offsetLeft;
        len = vx / volume.offsetWidth;
        if(len < 0) {
          len = 0;
          video.muted = true;
          sound.children[0].className = "glyphicon glyphicon-volume-off";
        } else if(len > 1) {
          len = 1;
        } else {
          len = len;
          video.muted = false;
          if(video.volume == 1) {
            sound.children[0].className = "glyphicon glyphicon-volume-up";
          } else {
            sound.children[0].className = "glyphicon glyphicon-volume-down";
          }
        }
        video.volume = len;
        volBar.style.width = len * volume.offsetWidth + "px";
        volPot.style.left = len * volume.offsetWidth + "px";
      }
      volume.onmouseup = function() {
        volume.onmousemove = null;
      }
    }
    //全屏
    var fullScreen = document.getElementById("fullScreen");
    fullScreen.onclick = function() {
      video.webkitRequestFullscreen();
    }
    //时间
    var timeTxt = document.getElementById("timeTxt");

    function timeNum(num) {
      var s = parseInt(num) % 60;
      var m = parseInt(num / 60);
      if(s < 10) {
        s = "0" + s;
      } else if(m < 10) {
        m = "0" + m;
      }
      return m + ":" + s;
    }
    video.addEventListener("timeupdate", function() {
      var allen = video.duration;
      var atlen = video.currentTime;
      var timeStr = "";
      allen = timeNum(allen);
      atlen = timeNum(atlen);
      //console.log(allen + "/" + atlen);
      timeTxt.innerText = atlen + "/" + allen;
    }, false)
  }
})();