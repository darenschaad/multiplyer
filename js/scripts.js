
var multiplier = function(countBy, countTo) {
  var array = [];
  for (var i = countBy; i <= countTo; i = i + countBy){
  array.push(i);
  }
  return array.toString();
};





$(document).ready(function() {
  $("form#counter").submit(function(event) {
    var countBy = parseInt($("#countBy").val());
    var countTo = parseInt($("#countTo").val());
    var result = multiplier(countBy, countTo);
    $(".result").text(result);
    $("#hidden").show();
    event.preventDefault();
  });
});
