/**
 * Created by Lauren on 9/14/2015.
 */

$(document).ready(function(){
  $("p.clickTxt").click(function(){
    alert("The text was clicked.");
  });

  $("#clickBtn").click(function(){
    alert("The button was clicked.");
  });

  $("p.enter").mouseenter(function(){
    $("p.enter").css("background-color", "lightblue");
    $("p.enter").css("color", "white");
  });

  $("p.leave").mouseleave(function(){
    $("p.leave").css("background-color", "lightgray");
  });

});
