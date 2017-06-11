// function updateOutput(clicked) {
//   document.querySelector('.output').textContent += clicked;
// }
// var output = "0";
//
// function convertOutput() {
//   document.querySelector('.output').textContent = output;
// }
var mathStore = "0";

function clickNumber(clicked) {
  if (document.querySelector('.output').textContent === "0"){
    document.querySelector('.output').textContent = "";
    document.querySelector('.output').textContent += clicked;
    mathStore +=  document.querySelector('.output').textContent;
    console.log(mathStore);
} else {
    document.querySelector('.output').textContent += clicked;
    mathStore +=  document.querySelector('.output').textContent;
    console.log(mathStore);
}
};

// LISTENER FOR MATH OPERATORS
// var mathyArray = document.querySelectorAll('.mathy');
// for (var i = 0; i < mathyArray.length; i++) {
//   mathyArray[i].addEventListener('click', function()  {
//     var store1 = document.querySelector('.output').textContent;
//     console.log(store1);
//   })};

var mathStore = "0";
function clickMathy(mClicked) {

   mathStore = document.querySelector('.output').textContent + mClicked;
  document.querySelector('.output').textContent = (mathStore);
  console.log(mathStore);
}

// DUMB BULLSHIT FOR REMOVING THE TRAILING OPERATOR
// function clickMathy(mClicked) {
//    mathStore = document.querySelector('.output').textContent + mClicked;
//    if (mathStore.length > 2){
//   document.querySelector('.output').textContent = eval(mathStore.slice(0, -1));
//   mathStore = document.querySelector('.output').textContent + mClicked;
//   console.log(mathStore);
// } else {
//   document.querySelector('.output').textContent = mathStore;
// console.log(mathStore);
// }
// }

function clickEquals(eClicked)  {
  mathStore = document.querySelector('.output').textContent;
  console.log(mathStore);
  document.querySelector('.output').textContent = eval(mathStore);
  console.log(mathStore);
}

function clickClear(cClicked) {
  mathStore = "0";
  document.querySelector('.output').textContent = mathStore;
}
