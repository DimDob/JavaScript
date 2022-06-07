function addItem() {
  let ul = document.getElementById("items");
  let txt = document.getElementById("newItemText").value;

  let li = document.createElement("li");
  li.textContent = txt;
  ul.appendChild(li);

  const deleteBtn = document.createElement("a");
  deleteBtn.textContent = "[Delete]";
  deleteBtn.href = "#";

  li.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", deleting);

  document.getElementById("newItemText").value = "";

function deleting(event) {
  event.target.parentElement.remove();
}


}
