var multiplier = function(countBy, countTo) {
  var array = [];
  for (var i = countBy; i <= countTo; i = i + countBy){
  array.push(i);
  }
  return array;
};

$(document).ready(function() {
  $("form#counter").submit(function(event) {
    var countBy = parseInt($("#countBy").val());
    var countTo = parseInt($("#countTo").val());
    var result = multiplier(countBy, countTo);
    var listItem = ""

    for (var i = 0; i < result.length; i++ ) {
        listItem += "<li>"  + result[i] + "</li>";
    }

    document.getElementById("itemList").innerHTML = listItem;
      $("#hidden").show();
    event.preventDefault();
  });
});
