var btn = document.querySelector("#myButton");

var inp = document.getElementById("name");

var tasklist = document.getElementById("tasklist");

function addTask() {
    var task = inp.value.trim();
    if (task == "") {
        return
    }
    var listItem = document.createElement('li');
    var spanItem = document.createElement('span');
    spanItem.textContent = task;
    spanItem.style.marginRight = '700px';
    var delBtn = document.createElement('button');
    delBtn.textContent = "Delete";
    delBtn.style.backgroundColor = 'red';
    delBtn.style.color = 'white';
    delBtn.style.border = 'none';
    delBtn.style.padding = '5px 10px';
    delBtn.style.cursor = 'pointer';
    delBtn.style.borderRadius = '5px';
    listItem.style.marginBottom = '20px';
    listItem.style.textAlign = "center";
    listItem.style.display="flex";
    listItem.style.justifyContent="space-between"
    listItem.style.alignItems="space-between"
    listItem.style.listStyle = "none";
    listItem.style.border = "2px solid red";
    listItem.style.padding = "5px 10px";
    delBtn.style.marginLeft = "30px";
    listItem.style.backgroundColor = "cyan";


    listItem.appendChild(spanItem);
    listItem.appendChild(delBtn);

    tasklist.appendChild(listItem);
  

    delBtn.addEventListener("click", deleteTask)

    inp.value = ""

}

btn.addEventListener("click", addTask);

function deleteTask(e) {
    e.target.parentNode.remove()
}


inp.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask()
    }
})