var calendar = document.querySelector(".calendar");
var Fulldate = document.querySelector(".date");
var btnPrevious = document.querySelector(".previous");
var btnNext = document.querySelector(".next");
btnPrevious.addEventListener("click", changeMonth);
btnNext.addEventListener("click", changeMonth);
var curentDate = new Date();
function howManyDays(date) {
    return (new Date(date.getFullYear(), date.getMonth(), 0)).getDate()
}
var MONTHS = [
    'Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];
create(curentDate);
function create(date) {
    var days = howManyDays(date);
    var realDate = new Date();
    for (i = 1; i <= days; i++) {
        var div = document.createElement("div");
        div.className = "day";
        div.style.width = "25px";
        div.style.height = "25px";
        div.style.fontSize = "18px";
        div.style.textAlign = "center";
        div.style.verticalAlign = "bottom";
        div.innerText = i;
        div.style.display = "inline-block";
        calendar.appendChild(div);
        div.style.border = "1px solid black";
        div.style.padding = "2px";
        div.style.margin = "2px";
        div.style.backgroundColor = "white";
        if (realDate.getDate() == i && curentDate.getMonth() == realDate.getMonth() && curentDate.getFullYear() == realDate.getFullYear()) {
            div.style.backgroundColor = "grey";
        }
    }
    Fulldate.innerText = date.getFullYear() + " " + MONTHS[date.getMonth()];
}
function changeMonth() {
    var days = calendar.querySelectorAll("div.day");
    days.forEach((e) => {
        e.parentElement.removeChild(e);
    })
    if (this.innerText == "previous") {
        curentDate = new Date(curentDate.getFullYear(), curentDate.getMonth() - 1, 1);

    } else {
        curentDate = new Date(curentDate.getFullYear(), curentDate.getMonth() + 1, 1);
    }
    create(curentDate);
}









