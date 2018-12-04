var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return Math.floor(number1 / number2);
};

var findRemainder = function(number1, number2) {
  return number1 % number2;
};

$(document).ready(function() {
  $("form#calc-input").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#number-in-one").val());
    var number2 = parseInt($("#number-in-two").val());
    var operation = $("input:radio[name=operation]:checked").val();
    $("div#result-log").show();
    if (operation === "add") {
      $("ul#init-nums").prepend("<li>"+number1+", "+number2+"</li>");
      $("ul#sum-log").prepend("<li>"+add(number1, number2)+"</li>");
      $("ul#diff-log").prepend("<li> ---- </li>");
      $("ul#prod-log").prepend("<li> ---- </li>");
      $("ul#quot-log").prepend("<li> ---- </li>");
      $("ul#remain-log").prepend("<li> ---- </li>");
    }
    else if (operation === "subtract") {
      $("ul#init-nums").prepend("<li>"+number1+", "+number2+"</li>");
      $("ul#sum-log").prepend("<li> ---- </li>");
      $("ul#diff-log").prepend("<li>"+subtract(number1, number2)+"</li>");
      $("ul#prod-log").prepend("<li> ---- </li>");
      $("ul#quot-log").prepend("<li> ---- </li>");
      $("ul#remain-log").prepend("<li> ---- </li>");
    }
    else if (operation === "multiply") {
      $("ul#init-nums").prepend("<li>"+number1+", "+number2+"</li>");
      $("ul#sum-log").prepend("<li> ---- </li>");
      $("ul#diff-log").prepend("<li> ---- </li>");
      $("ul#prod-log").prepend("<li>"+multiply(number1, number2)+"</li>");
      $("ul#quot-log").prepend("<li> ---- </li>");
      $("ul#remain-log").prepend("<li> ---- </li>");
    }
    else if (operation === "divide") {
      $("ul#init-nums").prepend("<li>"+number1+", "+number2+"</li>");
      $("ul#sum-log").prepend("<li> ---- </li>");
      $("ul#diff-log").prepend("<li> ---- </li>");
      $("ul#prod-log").prepend("<li> ---- </li>");
      $("ul#quot-log").prepend("<li>"+divide(number1, number2)+"</li>");
      $("ul#remain-log").prepend("<li> ---- </li>");
    }
    else if (operation === "remainder") {
      $("ul#init-nums").prepend("<li>"+number1+", "+number2+"</li>");
      $("ul#sum-log").prepend("<li> ---- </li>");
      $("ul#diff-log").prepend("<li> ---- </li>");
      $("ul#prod-log").prepend("<li> ---- </li>");
      $("ul#quot-log").prepend("<li> ---- </li>");
      $("ul#remain-log").prepend("<li>"+findRemainder(number1, number2)+"</li>");
    }
    else {
      $("ul#init-nums").prepend("<li>"+number1+", "+number2+"</li>");
      $("ul#sum-log").prepend("<li>"+add(number1, number2)+"</li>");
      $("ul#diff-log").prepend("<li>"+subtract(number1, number2)+"</li>");
      $("ul#prod-log").prepend("<li>"+multiply(number1, number2)+"</li>");
      $("ul#quot-log").prepend("<li>"+divide(number1, number2)+"</li>");
      $("ul#remain-log").prepend("<li>"+findRemainder(number1, number2)+"</li>");
    }
  });
});
