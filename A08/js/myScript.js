/**
 * Created by logawa on 9/27/15.
 */

$(document).ready(function () {

  // Hide the answers initially
  $("#faqs dd").hide();

  // Toggle Question and Answers and change +/-
  $(".question").click(function () {
    if ($(this).next(".answer").is(':visible')) {
      $(this).next(".answer").slideUp(300);
      $(this).children(".plusminus").text(' + ');
    }
    else {
      $(this).next(".answer").slideDown(300);
      $(this).children(".plusminus").text(' - ');
    }
  });

});

$(document).ready(function () {
  $("getURL").click(function () {
    var url = $(this).attr("a href");
    alert("# of links: " + url);
  });
});

function getURL() {
  var url = $("#checkURL").val();
  $.get(url, function (data, status) {
    var a = $(data).find("a");
    var count = 0;
    for (var j = 0; j < a.length; j++) {
      count++;
    }
    alert("Number of links: " + count + ".");
  });
}