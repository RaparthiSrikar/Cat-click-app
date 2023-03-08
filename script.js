//Declaring the Form 
let myFormEl = document.getElementById("myForm");
let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let imgEl = document.getElementById("img");
let imgErrMsgEl = document.getElementById("imgErrMsg");

let clickEl = document.getElementById("click");
let clickErrMsgEl = document.getElementById("clickErrMsg");

//If the form is empty it will show Required*
nameEl.addEventListener("blur", function(event) {
  if (event.target.value === "") {
    nameErrMsgEl.textContent = "Required*";
  } else {
    nameErrMsgEl.textContent = "";
  }
});

imgEl.addEventListener("blur", function(event) {
  if (event.target.value === "") {
    imgErrMsgEl.textContent = "Required*";
  } else {
    imgErrMsgEl.textContent = "";
  }
});

clickEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
      clickErrMsgEl.textContent = "Required*";
    } else {
      clickErrMsgEl.textContent = "";
    }
  });

myFormEl.addEventListener("submit", function(event) {
  event.preventDefault();
});



let increaseBtn = document.getElementById("increaseBtn");
let counter = 0
function onIncrement(){
    if (counter  === "touch"){
        counter = counter  + 1;
        counterValue.textContent = counter;
    }else if (counter === "Enter"){
        counter = counter + 1;
        counterValue.textContext = counter;
    }
}

let msgEl = document.getElementById("msg");
let saveBtnEl = document.getElementById("saveBtn");
let clearBtnEl = document.getElementById("clearBtn");

//Declaring the key globally
let storageKey = "userInput";

//onclick of the save button we are storing the key to the localStorage
saveBtnEl.onclick = function() {
    let msgVal = msgEl.value; //Declaring the input value
    //this method adds key and value to localStorage.
    localStorage.setItem(storageKey, msgVal);
};

//onclick of the clear button we are removing the item from the localStorage
clearBtnEl.onclick = function() {
    msgEl.value = ""; //clearing the input value
    //Remove an item by key from localStorage.
    localStorage.removeItem(storageKey);
};

//We get items from localStorage.
let storedUserInputVal = localStorage.getItem(storageKey);

//If the storedUserInputVal is not null then we will get the items from local storage
if (storedUserInputVal !== null) {
    msgEl.value = storedUserInputVal;
} else {
    //Empty string value
    msgEl.value = "";
}



