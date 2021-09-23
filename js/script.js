/*the main function*/
function main_function() {
  var exp = document.getElementById("demo").value;
  do {
    if (exp.indexOf("*") >= 1) exp = solve_the_expression(exp, "*");
    if (exp.indexOf("/") >= 1) exp = solve_the_expression(exp, "/");
    if (exp.indexOf("%") >= 1) exp = solve_the_expression(exp, "%");
    if (exp.indexOf("^") >= 1) exp = solve_the_expression(exp, "^");
    if (exp.indexOf("+") >= 1) exp = solve_the_expression(exp, "+");
    if (exp.indexOf("-") >= 1) exp = solve_the_expression(exp, "-");
    var lenth = exp.length;
    var counto = 0;
    for (var i = 0; i < lenth; i++) {
      if (isOperator(exp[i]) == true) counto += 1;
    }
  } while (counto != 0);
  document.getElementById("demo").value = exp;
}
/*function to clear the screen*/
function ClearScreen() {
  let stuff = document.getElementById("demo").value;
  if (stuff != "") {
    document.getElementById("demo").value = "";
  }
}
/*group of functions to make buttons functionable*/
function changecontentto1() {
  let data = document.getElementById("demo").value;
  if (data == "") document.getElementById("demo").value = 1;
  else {
    document.getElementById("demo").value += "1";
  }
}
function changecontentto2() {
  let data = document.getElementById("demo").value;
  if (data == "") document.getElementById("demo").value = 2;
  else {
    document.getElementById("demo").value += "2";
  }
}
function changecontentto3() {
  let data = document.getElementById("demo").value;
  if (data == "") document.getElementById("demo").value = 3;
  else {
    document.getElementById("demo").value += "3";
  }
}
function changecontentto4() {
  let data = document.getElementById("demo").value;
  if (data == "") document.getElementById("demo").value = 4;
  else {
    document.getElementById("demo").value += "4";
  }
}
function changecontentto5() {
  let data = document.getElementById("demo").value;
  if (data == "") document.getElementById("demo").value = 5;
  else {
    document.getElementById("demo").value += "5";
  }
}
function changecontentto6() {
  let data = document.getElementById("demo").value;
  if (data == "") document.getElementById("demo").value = 6;
  else {
    document.getElementById("demo").value += "6";
  }
}
function changecontentto7() {
  let data = document.getElementById("demo").value;
  if (data == "") document.getElementById("demo").value = 7;
  else {
    document.getElementById("demo").value += "7";
  }
}
function changecontentto8() {
  let data = document.getElementById("demo").value;
  if (data == "") document.getElementById("demo").value = 8;
  else {
    document.getElementById("demo").value += "8";
  }
}
function changecontentto9() {
  let data = document.getElementById("demo").value;
  if (data == "") document.getElementById("demo").value = 9;
  else {
    document.getElementById("demo").value += "9";
  }
}
function changecontentto0() {
  let data = document.getElementById("demo").value;
  if (data == "") document.getElementById("demo").value = 0;
  else {
    document.getElementById("demo").value += "0";
  }
}
function changecontenttoplus() {
  let data = document.getElementById("demo").value;
  if (data == "") document.getElementById("demo").value = "+";
  else {
    document.getElementById("demo").value += "+";
  }
}
function changecontenttominus() {
  let data = document.getElementById("demo").value;
  if (data == "") document.getElementById("demo").value = "-";
  else {
    document.getElementById("demo").value += "-";
  }
}
function changecontenttodivision() {
  let data = document.getElementById("demo").value;
  if (data == "") document.getElementById("demo").value = "/";
  else {
    document.getElementById("demo").value += "/";
  }
}
function changecontenttopro() {
  let data = document.getElementById("demo").value;
  if (data == "") document.getElementById("demo").value = "*";
  else {
    document.getElementById("demo").value += "*";
  }
}

function changecontenttomodulo() {
  let data = document.getElementById("demo").value;
  if (data == "") {
    document.getElementById("demo").value = "%";
  } else {
    document.getElementById("demo").value += "%";
  }
}
function changecontenttoe() {
  let data = document.getElementById("demo").value;
  if (data == "") document.getElementById("demo").value = 2.7183;
  else document.getElementById("demo").value += "2.7183";
}
function changecontenttopi() {
  let data = document.getElementById("demo").value;
  if (data == "") document.getElementById("demo").value = 3.1415;
  else document.getElementById("demo").value += "3.1415";
}
function changecontenttodot() {
  let data = document.getElementById("demo").value;
  if (data == "") document.getElementById("demo").value = ".";
  else document.getElementById("demo").value += ".";
}
function changecontenttosquare() {
  let data = document.getElementById("demo").value;
  if (data == "") document.getElementById("demo").value = "^";
  else {
    document.getElementById("demo").value += "^";
  }
}

/*function to check if the argument is an operator*/
function isOperator(str) {
  if (str == "*") return true;
  else if (str == "+") return true;
  else if (str == "-") return true;
  else if (str == "/") return true;
  else if (str == "%") return true;
  else return false;
}
/*function to exclude the used character from expression*/
function minimize(str) {
  var nstr = "";
  var len = str.length;
  for (var i = 0; i < len; i++) {
    if (str[i] != "F") {
      nstr += str[i];
    }
  }
  return nstr;
}
//function to replace the character in the expression
function rep(exp, ind, ch) {
  var len = exp.length;
  var nstr = "";
  for (var i = 0; i < len; i++) {
    if (i == ind) {
      nstr += ch;
    } else nstr += exp[i];
  }
  exp = nstr;
  return exp;
}
//function to reverse a string
function invert(str) {
  var newstr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newstr += str[i];
  }
  str = newstr;
  return str;
}

function square(num1, num2) {
  let result = 1;
  while (num2 > 0) {
    result *= num1;
    --num2;
  }
  return result;
}

function solve_the_expression(exp, operator) {
  var len = exp.length;
  var found = false;
  var nstr = "";
  //  var result=0;
  /*code to check the presence of * and solve it*/
  var operand1 = "";
  var operand2 = "";
  var check = exp.indexOf(operator);
  var counter = check - 1;
  var mexp = exp;
  /*code to get the first argument*/
  while (counter >= 0 && !found) {
    if (isOperator(exp[counter]) == true) {
      found = true;
    } else {
      if (exp[counter] == "F") {
        operand1 += mexp[counter];
        nstr = rep(exp, counter, "F");
        exp = nstr;
        counter -= 1;
      } else {
        operand1 += exp[counter];
        nstr = rep(exp, counter, "F");
        exp = nstr;
        counter -= 1;
      }
    }
  }
  operand1 = invert(operand1);
  /*code to get the second argument*/
  found = false;
  var counter2 = check + 1;
  while (counter2 < len && !found) {
    if (isOperator(exp[counter2]) == true) {
      found = true;
    } else {
      operand2 += exp[counter2];
      nstr = rep(exp, counter2, "F");
      if (nstr[counter2] != "F") nstr = rep(nstr, counter2, "F");
      //  nstr=exp;
      exp = nstr;
      counter2 += 1;
    }
  }
  //  document.write(exp);
  let result = 0;
  switch (operator) {
    case "+":
      result = Number(operand1) + Number(operand2);
      break;
    case "-":
      result = Number(operand1) - Number(operand2);
      break;
    case "*":
      result = Number(operand1) * Number(operand2);
      break;
    case "/":
      result = Number(operand1) / Number(operand2);
      break;
    case "%":
      result = Number(operand1) % Number(operand2);
      break;
    case "^":
      result = square(Number(operand1), Number(operand2));
      break;
    default:
      alert(operator + "is illegal or not on the list");
  }
  exp = nstr.replace(operator, result);
  exp = minimize(exp);
  //document.write(exp);
  return exp;
}
