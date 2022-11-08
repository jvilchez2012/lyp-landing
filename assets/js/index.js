//Move to english page
var check = document.querySelector(".check");
check.addEventListener("click", language);

function language() {
 let id = check.checked;

 if(id == true){
  window.location.href = "en/index.html";
 }else{
  window.location.href = "../index.html";
 }
}