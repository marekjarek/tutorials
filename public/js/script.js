
$(document).ready(function(){
    $(".guess_box").click(function(){
      $(".guess_box p").remove();
      var discount = Math.floor((Math.random()*6) + 5);
      var discount_msg = "<p>Your Discount is "+ discount +"%</p>";
     
      $(this).append(discount_msg);
    });
});
