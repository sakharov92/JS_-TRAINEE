var MONTHS = [
    'Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];
var DAYS = [
    'Вс', 'Пн', 'Вт', 'Ср', 'Чт',
    'Пт', 'Сб'
];

//data base
var data = {};

//current date
var currentDate = new Date();

//navigation(top) bar
var currentYear = document.querySelector('.currentYear');
var btnLeft = document.querySelector(".left");
var btnRight = document.querySelector(".right");

//main block. Current month.
var dates = document.querySelector(".dates");

//listeners
btnRight.addEventListener('click', changeMonth);
btnLeft.addEventListener('click', changeMonth);

//cheate current month
createMonth(currentDate);

//date for creating new monthes in next way => YY,MM,01,00,00,00,000
var newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

//Fill free sockets in the dates
function fillFreeSockets(date) {
    var NumOfFirstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    var FreeSockets;
    if (NumOfFirstDay == 0) {
        FreeSockets = 6;
    } else {
        FreeSockets = NumOfFirstDay - 1;
    }
    for (let i = 0; i < FreeSockets; i++) {
        var div = document.createElement("div");
        div.className = "freeDay";
        dates.append(div);
    }
}

//filling dates by numbers according to current month
function fillRealSockets(date) {
    var NumOfDays = howManyDaysInMonth(date);
    for (let i = 1; i <= NumOfDays; i++) {
        var div = document.createElement("div");
        div.className = "realDay";
        div.innerText = i;
        checkTheNotes(div, date, i);
        dates.append(div);
        if (currentDate.getDate() == i && currentDate.getFullYear() == date.getFullYear() && currentDate.getMonth() == date.getMonth()) {
            div.style.backgroundColor = "black";
            div.style.color = "white";
        }
        div.addEventListener("mousedown", openNote);
    }
}

//create month, fill dates by current month
function createMonth(date) {
    currentYear.innerText = date.getFullYear() + " " + MONTHS[date.getMonth()];
    fillFreeSockets(date);
    fillRealSockets(date)

}

//change month (+1 || -1)
function changeMonth(e) {
    saveData(dates);
    dates.innerHTML = "";
    if (e.target.className == "left") {
        newDate = new Date(newDate.getFullYear(), newDate.getMonth() - 1, 1);
    } else {
        newDate = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 1);
    }
    createMonth(newDate);
}

//to determine how many days in current month
function howManyDaysInMonth(date) {
    date = new Date(date.getFullYear(), date.getMonth(), 0);
    return date.getDate();
}

//open note for date
function openNote(e) {
    var isNote = e.target.querySelector(".note");
    if (isNote) {
        displayNote(isNote);
    } else {
        addNewNote(e);
    }
}

//display note if it's present
function displayNote(isNote) {
    isNote.style.display = "block";
    setTimeout(() => { isNote.querySelector("input").focus() }, 10);

}

//add new note if it's out
function addNewNote(e) {
    var note = document.createElement("div");
    note.className = "note";
    e.target.append(note);
    var inp = document.createElement("input");
    inp.className = "addNote";
    note.append(inp);
    var ol = document.createElement("ol");
    note.append(ol);
    setTimeout(() => {
        inp.focus()
    }, 10);
    inp.addEventListener("blur", noteFocusOut);
    inp.addEventListener("keydown", addNote);
}

//add new row to the current note
function addNote(e) {
    if (e.key == "Enter") {
        var li = document.createElement("li");
        li.innerText = e.target.value;
        e.target.value = "";
        var ol = e.target.parentElement.querySelector("ol");
        ol.append(li);
        ol.style.display = "block";
        ol.style.color = "black";
        underline(e.target);
    }
}
//remove focus of current note
function noteFocusOut(e) {
    e.target.parentElement.style.display = "none";
}

//save data(notes) after changing th month
function saveData(d) {
    var daysArr = d.querySelectorAll(".realDay");
    daysArr.forEach((e) => {
        var isNote = e.querySelector(".note");
        if (isNote) {
            var newD = new Date(newDate.getFullYear(), newDate.getMonth(), e.innerText);
            data[newD] = isNote.parentElement.innerHTML;
        }
    })
}

//check if data has notes of current day
function checkTheNotes(divBlock, date, curentDay) {
    var isDataPresentForCurrentDat = data[new Date(date.getFullYear(), date.getMonth(), curentDay)];
    if (isDataPresentForCurrentDat) {
        divBlock.innerHTML = isDataPresentForCurrentDat;
        var inp = divBlock.querySelector("input");
        inp.addEventListener("blur", noteFocusOut);
        inp.addEventListener("keydown", addNote);
        inp.parentElement.parentElement.style.textDecoration = "underline ";
    }
}

//uderline date if it has notes
function underline(elem) {
    elem.parentElement.parentElement.style.textDecoration = "underline ";
}







