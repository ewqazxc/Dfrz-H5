(function() {
  $(function() {
    var days = $("#days");
    var hours = $("#hours");
    var mins = $("#mins");
    var secs = $("#secs");
    var day = 11;
    var hour = 11;
    var min = 11;
    var sec = 11;
    var s = setInterval(function(){
      if(sec<0){
        sec=59;
        min--;
        if(min<0){
          min=59;
          hour--;
          if(hour<0) {
            hour=23;
            day--;
            if(day<=0){
              day=0;
            }
          }
        }
      }
      secs.text(sec);
      mins.text(min);
      hours.text(hour);
      days.text(day);
      console.log(day,hour,min,sec);
      sec--;
      if(sec<0&&min==0&&hour==00&&day==0) {
        clearInterval(s);
      }
    },1000);
  });
})();
