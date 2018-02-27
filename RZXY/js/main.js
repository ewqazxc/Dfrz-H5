(function() {
  $(function() {
    var back = $("#comeback");
    back.on("click", function() {
      window.history.go(-1);
      return false;
    })
  })
})();