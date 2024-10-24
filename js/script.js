var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));

  var dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  ul.appendChild(li);
  input.value = "";
  li.addEventListener("click", ()=>{
    li.classList.toggle("done");
  });
  dBtn.addEventListener("click", ()=>{
    li.remove();
  });
  var edit = document.createElement("button");
  edit.classList.add("edit")
  edit.innerHTML= "Edit";
  li.appendChild(edit);
  edit.addEventListener("click", ()=>{
if (edit.innerText.toLocaleLowerCase()=="edit"){
  edit.removeAttribute("readonly");
  edit.focus();
  edit.innerText="save";
}else{
  edit.setAttribute("readonly","readonly");
  edit.innerText="Edit";

}
  });


  function deleteListItem() {
    li.classList.add("delete");
  }
  dBtn.addEventListener("click", deleteListItem);
}
function inputLength() {
  return input.value.length;
}
function addAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}
function addListAfterKeypress() {
  if (inputLength() > 0 && event.which == 13) {
    createListElement();
  }
}
enterButton.addEventListener("click", addAfterClick);
input.addEventListener("keypress",addListAfterKeypress)