var btns = document.querySelectorAll(".btn");
var pArr = document.querySelectorAll("p");
btns.forEach((e) => {
    e.addEventListener('click', (e) => {
        hideP();
        unPressBtn();
        e.target.classList.add("chosed");
        var currentTitle = e.target.innerText;
        pArr.forEach((e) => {
            if (e.className == currentTitle) {
                e.classList.add("chosed");
              
            }
        })

    });
})
function hideP() {
    pArr.forEach((e) => {
        e.classList.remove("chosed");
    })
}
function unPressBtn() {
    btns.forEach((e) => {
        e.classList.remove("chosed");
    })
}
