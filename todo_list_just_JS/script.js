var inp = document.querySelector("input.inp");
inp.addEventListener("keypress", add);
var divlList = document.querySelector("div.list");
divlList.addEventListener("click", editList);
divlList.addEventListener("dblclick", editText);

//Adding new item to the list
function add(e) {
    if (e.key == "Enter") {
        var div = document.createElement("div");
        div.className = "block";
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.className = "check hover";
        var span = document.createElement("span");
        span.innerHTML = inp.value;
        span.className = "span";
        inp.value = "";
        var btn = document.createElement("div");
        btn.innerText = "X";
        btn.className += "remove hover";
        div.appendChild(checkBox);
        div.appendChild(span);
        div.appendChild(btn);
        inp.after(div);
  }
}

// Edit lists items (remove,check, edit)
function editList(e) {
    var item = e.target;
    if (item.closest(".check")) {
        if (item.checked) {
            var span = item.parentElement.querySelector(".span");
            span.style.textDecoration = "line-through";
            item.style.visibility = "hidden";
        } else {
            var span = item.parentElement.querySelector(".span");
            span.style.textDecoration = "none";
        }
    };
    if (item.closest(".remove")) {
        var parent = item.parentElement;
        parent.parentElement.removeChild(parent);
    }
}

function editText(e) {
    var item = e.target;
    if (item.closest("span")) {
        var inp = document.createElement("input");
        item.after(inp);
        inp.style.height = item.style.height;
        inp.style.width = '245px';
        inp.value = item.innerHTML;
        inp.focus();
        item.style.display = "none";
        inp.className += "inpChange";
        inp.addEventListener("keyup", closeEdit);
        inp.addEventListener("blur", removeFocus);
    }
}

//Removing focus of inputs under focus
function removeFocus(event) {
    event.target
    var localSpan = event.target.parentElement.querySelector(".span");
    localSpan.innerHTML = event.target.value;
    localSpan.style.display = "flex";
    event.target.parentElement.removeChild(event.target);
}

//Closing input and saving changes in the item
function closeEdit(e) {
    if (e.key == "Enter") {
        e.target.blur();
    }
}



