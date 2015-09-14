/**
 * Created by Lauren on 9/14/2015.
 */

/** Link 2 */
function clickButton() {
  document.getElementById("clickButton").innerHTML = "Don't look, spoiler!";
}

document.getElementById("textClick").onclick = function() {textClick()};

function textClick() {
  document.getElementById("textClick").innerHTML = "YOU CLICKED ME!";
}

/** Link 3 */
document.getElementById("hovering").onmouseenter = function() {mouseEnter()};
document.getElementById("hovering").onmouseleave = function() {mouseLeave()};

function mouseEnter() {
  document.getElementById("hovering").style.color = "blue";
}

function mouseLeave() {
  document.getElementById("hovering").style.color = "black";
}