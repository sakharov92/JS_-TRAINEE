var containers = document.querySelectorAll(".game div");
var curentPlayer = document.querySelector("p");
var currentStep = 'X';
var nextStep = 'O'
var btn = document.querySelector("button");

var arr = [];

containers.forEach(function (elem) {
    elem.addEventListener('click', step);
    arr.push(elem);
});
btn.addEventListener('click', clear);

function clear() {
    containers.forEach(function (elem) {
        elem.addEventListener('click', step);
    });
    containers.forEach(function (e) {
        e.innerText = "";
    })
    curentPlayer.innerText = "Ходит: Х";
}

var win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],];


function step() {
    this.innerText = currentStep;
    [currentStep, nextStep] = [nextStep, currentStep];
    curentPlayer.innerText = "Ходит: " + currentStep;
    check(this.innerText);
    this.removeEventListener('click', step);
}

function check(elem) {
    for (let i = 0; i < win.length; i++) {
        if (elem == arr[win[i][0]].innerText && arr[win[i][1]].innerText == elem && arr[win[i][2]].innerText == elem) {
            curentPlayer.innerText = "Победил: " + elem;
            containers.forEach(function (elem) {
                elem.removeEventListener('click', step);

            });
        }
    }
}
