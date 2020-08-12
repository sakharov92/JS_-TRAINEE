var btn = document.querySelector("button");
btn.addEventListener("click", next);
var arrQuastionsp = document.querySelectorAll("li.quastion");
var rightAnswers = 0;
curentQuastion = 0;

for (let i = 1; i < arrQuastionsp.length; i++) {
    arrQuastionsp[i].style.display = "none";
}

function next() {
    check();
    if (btn.innerText == "Проверить") {
        btn.removeEventListener('click', next);
        btn.disabled = true;
        console.log(rightAnswers);
    } else {
        arrQuastionsp[curentQuastion].style.display = 'none';
        curentQuastion++;
        arrQuastionsp[curentQuastion].style.display = 'block';
        if (curentQuastion == (arrQuastionsp.length - 1)) {
            btn.innerText = "Проверить";
        };
    }
}

function check() {
    var currentList = arrQuastionsp[curentQuastion].querySelectorAll("input");
    var isOK = 0;
    currentList.forEach(function (e) {
        if ((e.checked && e.value == "true") || (!e.checked && e.value != "true")) {
            isOK++;
        }
    })
    if (isOK == currentList.length) {
        rightAnswers++;
    }
}