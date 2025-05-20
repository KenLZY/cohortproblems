function numbers(l) {
  /*
  Input(s): a list of strings
  Output(s): a list of integers
  Description:
  This function converts a list of strings into a
  list of integers
  */
  var o = [];
  for (let i in l) {
    var n = parseInt(l[i], 10);
    if (!isNaN(n)) {
      o.push(n);
    }
  }
  return o;
}

function min_max(a) {
  /*
  input: an array of numbers
  output: an object containing 'min', with the minimum of the array
          and 'max' the maximum of the array.
  */
  var min = null;
  var max = null;
  // TODO: fixme
  a.sort((a, b) => a - b);
  min = a[0];
  max = a[a.length - 1];
  return { min: min, max: max }; // without any quotation marks, this will not be treated as a variable, it is a string
}

function handleButton1Click() {
  var textbox1 = document.getElementById("textbox1");
  var min = document.getElementById("min");
  var max = document.getElementById("max");
  var items = textbox1.value.split(",");
  var obj = min_max(numbers(items));
  min.innerHTML = obj["min"];
  max.innerHTML = obj["max"];
}

function run() {
  var button1 = document.getElementById("button1");
  // TODO: fixme
  button1.addEventListener("click", handleButton1Click);
}

document.addEventListener("DOMContentLoaded", run);