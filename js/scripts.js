$(document).ready(function() {

  $("#showCat").click(function() {
    $("#hiddenCat").toggle();
  });

  $("#showDog").click(function() {
    $("#hiddenDog").toggle();
  });

  $("#dog").click(function() {
    $("#dogList").after("Woof!" + "<br>");
  });
  $("#cat").click(function() {
    $("#catList").after("Meow!" + "<br>");
  });
});
