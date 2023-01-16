$(document).ready(function(){
  $(".hedarstikymanujs").waypoint(function(direction){
    if (direction == "down"){
      $(".positonmanu").addClass("stkeyjs");
    } else {
      $(".positonmanu").removeClass("stkeyjs");
    }

  });

  var mixer = mixitup('.potfuliojs');
});
