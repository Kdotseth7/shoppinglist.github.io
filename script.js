var textInput = document.getElementById("inputText");
var buttonSubmit = document.getElementsByClassName("enter")[0];
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

// Length of Input Text for textbox
function inputLength(){
    return textInput.value.length;
}

// NEW LIST ITEMS
// Function to create new list item with delete button, strikethrough & also remove list item on clicking delete button
function createListItem() {
    var liNew = document.createElement("li");
    liNew.appendChild(document.createTextNode(textInput.value));
    ul.appendChild(liNew);
    textInput.value = "";
    var del = document.createElement("button");
    del.appendChild(document.createTextNode("Delete"));
    liNew.appendChild(del);
    liNew.onclick = function(){
        liNew.classList.toggle("done");
    }
    del.onclick = function () {
        liNew.classList.add("displayNone");
    }
}

// Function to create list item on clicking Button
function createListItemOnClick(){
    if( inputLength() > 0 ){
        createListItem();
    }
}

// Function to create list item on hitting enter key
function createListItemOnEnter(event){
    if( inputLength() > 0 && event.keyCode === 13){
        createListItem();
    }
}

// EXISTING LIST ITEMS
// Function to strikethrough existing list items
function strikeThough(item){
    item.addEventListener("click", function () {
        item.classList.toggle("done");
    });
}

// Function to create Delete button for existing list items
function createDelButton(item){
    var del = document.createElement("button");
    del.appendChild(document.createTextNode("Delete"));
    item.appendChild(del);
    del.onclick = function () {
        item.classList.add("displayNone");
    }
}

buttonSubmit.addEventListener("click", createListItemOnClick);
textInput.addEventListener("keypress", createListItemOnEnter);
li.forEach(strikeThough);
li.forEach(createDelButton);