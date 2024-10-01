let itemsArray = [];
function calculateSum() {
  const num1 = document.getElementById("t1-num1");
  const num2 = document.getElementById("t1-num2");

  if (num1.value.length == 0 || num2.value.length == 0) {
    document.getElementById("t1-error").innerHTML =
      "pls enter all input fields";
    return;
  }
  document.getElementById("t1-error").innerHTML = "";
  let result = parseInt(num1.value) + parseInt(num2.value);
  if (num1.value == num2.value) {
    result *= 3;
    document.getElementById("t1-triple").innerHTML =
      "The two entered number are equal the triple of the sum will be shown";
    document.getElementById("t1-result").innerHTML = "Sum = " + result;
  } else {
    document.getElementById("t1-triple").innerHTML = "";
    document.getElementById("t1-result").innerHTML = "Sum = " + result;
  }
}
function guess() {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  const num = document.getElementById("t2-num");
  if (num.value.length == 0) {
    document.getElementById("t2-error").innerHTML = "pls enter a number";
    return;
  }
  document.getElementById("t2-error").innerHTML = "";
  if (num.value == randomNum) {
    document.getElementById("t2-result").innerHTML = "Good Work👌";
  } else {
    document.getElementById("t2-result").innerHTML =
      " Not matched try again 😣";
  }
  document.getElementById("t2-random-num").innerHTML =
    "The Random number: " + randomNum;
}
function checkRange() {
  const num1 = document.getElementById("t3-num1");
  const num2 = document.getElementById("t3-num2");
  const range = 50.99;
  if (num1.value.length == 0 || num2.value.length == 0) {
    document.getElementById("t3-error").innerHTML =
      "pls enter all input fields";
    return;
  }
  document.getElementById("t3-error").innerHTML = "";
  if (parseFloat(num1.value) <= range && parseFloat(num2.value) <= range) {
    document.getElementById("t3-result").innerHTML = "result = " + true + "✅";
  } else {
    document.getElementById("t3-result").innerHTML = "result = " + false + "❌";
  }
}
function findClosest() {
  const num1 = document.getElementById("t4-num1");
  const num2 = document.getElementById("t4-num2");

  if (num1.value.length == 0 || num2.value.length == 0) {
    document.getElementById("t4-error").innerHTML =
      "pls enter all input fields";
    return;
  }

  const x = Math.abs(100 - parseFloat(num1.value));
  const y = Math.abs(100 - parseFloat(num2.value));
  if (x == y) {
    document.getElementById("t4-result").innerHTML = "both number are equal";
  } else if (x > y) {
    document.getElementById("t4-result").innerHTML =
      "Number " + num1.value + " is closest value to 100";
  } else {
    document.getElementById("t4-result").innerHTML =
      "Number " + num2.value + " is closest value to 100";
  }
  const value = document.getElementById("text1").value;
  const str = value.substr(1, value.length - 2);

  document.getElementById("string").innerHTML = str;
}
function add() {
  const num = document.getElementById("t5-num");
  if (num.value.length == 0) {
    document.getElementById("t5-error").innerHTML = "pls enter a number";
    return;
  }
  document.getElementById("t5-error").innerHTML = "";
  itemsArray.push(num.value);
  num.value = "";
}
function display() {
  const itemList = document.getElementById("item-list");
  itemList.innerHTML = "";

  // Loop through the array and create list items
  itemsArray.forEach(function (item, index) {
    const listItem = document.createElement("li");
    listItem.textContent = `Element ${index + 1} =  ${item}`;
    itemList.appendChild(listItem);
  });
}
