var date = new Date();
var selectYear = document.createElement('select');
var selectMonth = document.createElement("select");
var selectDay = document.createElement("select");
document.body.append(selectYear);
document.body.append(selectMonth);
document.body.append(selectDay);

fillSelect(selectYear, date.getFullYear() - 10, date.getFullYear() + 10);
selectYear.value = date.getFullYear();
fillSelect(selectMonth, 1, 12);
selectMonth.value = date.getMonth() + 1;
fillSelect(selectDay, 1, upperDate(date));
selectDay.value = date.getDate();

selectYear.addEventListener('change', checkDate);
selectMonth.addEventListener('change', checkDate);

function fillSelect(select, from, to) {
    selectDay.innerHTML = "";
    for (let i = from; i <= to; i++) {
        var opt = document.createElement("option");
        opt.innerText = i;
        select.append(opt);
    }
}

function upperDate(date) {
    var newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    newDate = new Date(newDate - 1000);
    return newDate.getDate();
}


function checkDate() {
    var date = new Date(selectYear.value, selectMonth.value - 1, selectDay.value);
    if (date.getMonth() != (selectMonth.value - 1)) {
        date.setMonth(date.getMonth() - 1);
        fillSelect(selectDay, 1, upperDate(date));
    } else {
        var currentDate = selectDay.value;
        fillSelect(selectDay, 1, upperDate(date));
        selectDay.value = currentDate;
    }
}