/**
 * Created by Lauren on 9/16/2015.
 */

function getForm() {
  var x = document.getElementById("simpleForm");
  var text = "";
  var i;
  var myArray    = new Array();

  for(i = 0; i < x.length; i++) {
    document.write("<tr><td>Number " + i + " is:</td>");
    document.write("<td>" + myArray[i] + "</td></tr>");
  }
  document.getElementById("table").innerHTML = text;
}