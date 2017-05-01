$(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();

    var players = ["mostHated", "2ndHated", "leastHated"];

    players.forEach(function(player){
      var userInput = $("#" + player).val();
      $("." + player).text(userInput);
    });
    $(".output").show();
  });
});
