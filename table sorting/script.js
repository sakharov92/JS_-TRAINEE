var table = document.querySelector("table");
var thArr = document.querySelectorAll("th");
thArr.forEach((e) => {
    e.addEventListener('click', sort);
})

var arr = createArrFromTable(table);

//sorted Fn
function compareNumbersForward(a, b) {
    return a - b;
}
function compareNumbersBack(a, b) {
    return b - a;
}

//define sorting derection
function defineSortingDirection(targetClassName) {
    var diraction;
    if (targetClassName == "forward") {
        diraction = "back"
    } else {
        if (targetClassName == "back") {
            diraction = "forward"
        } else {
            diraction = "forward"
        }
    }
    return diraction;
}

//sort additional array
function sortAdditionalArray(arr, direction, ) {

    if (direction == "forward") {
        if (typeof (arr[0][0]) == 'string') {
            arr.sort();
        }
        else {
            arr.sort(compareNumbersForward);
        }
    } else {
        if (typeof (newArr[0][0]) == 'string') {
            arr.sort().reverse();
        }
        else {
            arr.sort(compareNumbersBack);
        }
    }
}

//create sorted array from additional array
function additionalArrayToSortedArray(newArr, sortedArr, numColum) {
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j][numColum] == newArr[i]) {
                sortedArr.push(arr[j]);
            }
        }
    }
}

//sort function
function sort(e) {
    var numColum = whichcolum(e);
    var newArr = [];
    var sortedArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i][numColum]);
    }
    var direction = defineSortingDirection(e.target.className);
    sortAdditionalArray(newArr, direction);
    additionalArrayToSortedArray(newArr, sortedArr, numColum);
    fillSortedArr(sortedArr);
}


//fill the table by sorted data from array
function fillSortedArr(arr) {
    var trArr = document.querySelectorAll("tr.data");
    var i = 0;
    trArr.forEach(function (e) {
        var j = 0;
        var tdArr = e.querySelectorAll("td");
        tdArr.forEach((e) => {

            e.innerText = arr[i][j];
            j++;
        })
        i++;
    })
}

//convert table to array
function createArrFromTable(table) {
    var arr = [];
    var rowsArr = table.querySelectorAll("tr");
    var i = 0;
    rowsArr.forEach((e) => {
        var j = 0;
        var arrTd = []
        e.querySelectorAll("td").forEach((e) => {
            arrTd[j] = e.innerText;
            if (!isNaN(arrTd[j])) {
                arrTd[j] = Number(arrTd[j]);
            }
            j++;
        })
        arr[i] = arrTd;
        i++;
    })
    arr.splice(0, 1);
    return arr;
}

//define which colum has to ne sorted
function whichcolum(e) {
    var res = 1;
    var numOfColum = 1;
    thArr.forEach((elem) => {
        if (e.target == elem) {
            return res = numOfColum;
        } else {
            numOfColum++;
        }
    })
    return res - 1;
}