var btn = document.querySelector("button");
var game = document.querySelector(".game");
var timeP = document.querySelector(".time");
var items = document.querySelectorAll(".item");
var arr = fillArr();
var currentGamerPosition = 1;
var interval;
btn.addEventListener("click", start);

function clickItem(e) {
    if (e.target.className == "item") {
        if (Number(e.target.innerText) == currentGamerPosition) {
            e.target.style.backgroundColor = "red";
            currentGamerPosition++;
        }
    }
    if (currentGamerPosition == 26) {
        clearInterval(interval);
        timeP.innerText = "Победа";
    }
}

function fillTheGameWithData() {
    items.forEach((item) => {
        var currentItemInArr = Math.floor(Math.random() * arr.length);
        item.innerText = arr[currentItemInArr];
        arr.splice(currentItemInArr, 1);
        item.style.fontSize = Math.floor(Math.random() * 20) + 10 + "px";
        item.style.color = getRandomColor();
    })
}

function start() {
    game.addEventListener("click", clickItem);
    var time = 30;
    interval = setInterval(() => {
        time--;
        timeP.innerHTML = "Осталось: " + time + "c";
        if (time <= 0) {
            clearInterval(interval);
            timeP = "Время вышло";
            game.removeEventListener("click", clickItem);
        }
    }, 1000);
    fillTheGameWithData();
    document.querySelector(".startPage").style.display = "none";
    game.style.display = "block";
    var restart = document.createElement("button");
    restart.innerText = "restart";
    restart.style.marginTop = "20px";
    game.append(restart);
    restart.addEventListener('click', () => {
        clearInterval(interval);
        fillArr();
        arr = fillArr();
        restart.parentElement.removeChild(restart);
        game.addEventListener("click", clickItem);
        currentGamerPosition = 1;
        items.forEach((e) => {
            e.style.backgroundColor = "white";
        })
        start();
    })
}

function randomInterval(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function getRandomColor() {
    return 'rgb(' + randomInterval(0, 255) + ',' +
        randomInterval(0,255) + ',' + randomInterval(0, 255) + ')';
}
function fillArr() {
    var arr = [];
    for (let i = 1; i <= 25; i++) {
        arr.push(i);
    }
    return arr;
}