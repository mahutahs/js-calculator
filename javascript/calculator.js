var displayBox = document.getElementById("Display");
function buttonValue(value){
  displayBox.value += value;
if (value === "CLEAR") {
  displayBox.value = "";
}
}

function equals(e){
e = displayBox.value;
e = eval(e);
displayBox.value = e;
}
