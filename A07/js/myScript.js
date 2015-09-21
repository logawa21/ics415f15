/**
 * Created by logawa due 9/21/15.
 */

/**
 * Get the class of an element
 */
function getClasses(elem) {
  // var x = document.getElementById(elem).className.split(",");
  var array = ["["];
  for(var i = 0; i < elem.length; i++){
    var x = document.getElementsByTagName(elem)[i].className;
    array += "\"" +x + "\",";
  }
  document.getElementById("demo").innerHTML = array + "].";
}

/**
function isElement(obj) {
  try {
    // For Firefox, Opera and Chrome
    return obj instanceof HTMLElement;
  }
  catch(e){
    // IE Bugfix
    return (typeof obj==="object") &&
        (obj.nodeType===1) && (typeof obj.style === "object") &&
        (typeof obj.ownerDocument ==="object");
  }
}

// Get classes from a DOM Element
function getClasses(elem) {
  if(isElement(elem)) {
    return elem.className.split(/\s+/)
  }
  return null;
}
 */

/**
 * Add a class to an element
 */
function addClass(elem, className) {
  // document.getElementById(elem).className += className;
  // element.classList.add('classname');
  var i;
  var n = 0;

  className = className.split(",");

  for(i = 0; i < className.length; i++){
    if((" " + document.getElementById(id).className + " ").indexOf(" " + className[i] + " ") == -1){
      document.getElementById(id).className += " " + className[i];
      n++;
    }
  }

  return n;
}

/**
 * Validate the form
 */
function validateForm() {
  var username = document.getElementById('username');
  var email = document.getElementById('email');
  var passCheck1 = document.getElementById('password');
  var passCheck2 = document.getElementById('confirm');

  var errorCheck = false;

  var errorColor = "red";

  if(username.value.length == 0 && email.value.length == 0 && passCheck1.value.length == 0) {
    document.getElementById("username").style.backgroundColor = errorColor;
    document.getElementById("email").style.backgroundColor = errorColor;
    document.getElementById("password").style.backgroundColor = errorColor;
    document.getElementById("confirm").style.backgroundColor = errorColor;
    alert("Please fill out the form!");
    errorCheck = false;
  }

  else if(username.value.length == 0) {
    document.getElementById("username").style.backgroundColor = errorColor;
    alert("Please enter a username!");
    errorCheck = false;
  }

  else if(email.value.length == 0) {
    document.getElementById("email").style.backgroundColor = errorColor;
    alert("Please enter an email!");
    errorCheck = false;
  }

  else if(passCheck1.value.length == 0) {
    document.getElementById("password").style.backgroundColor = errorColor;
    alert("Please enter a password!");
    errorCheck = false;
  }

  else if(passCheck2.value.length == 0) {
    document.getElementById("confirm").style.backgroundColor = errorColor;
    alert("Please enter a password!");
    errorCheck = false;
  }

  if(passCheck1.value !== passCheck2.value) {
    document.getElementById("password").style.backgroundColor = errorColor;
    document.getElementById("confirm").style.backgroundColor = errorColor;
    alert("Passowrds don't match!");
    errorCheck = false;
  }
}