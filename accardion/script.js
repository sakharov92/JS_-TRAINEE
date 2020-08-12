var btns = document.querySelectorAll(".btn");
var pArr = document.querySelectorAll("p");
btns.forEach((e) => {
    e.addEventListener('click', chose);
})

function chose(e) {
    if (e.target.classList.contains("chosed")) {
        removeClasses();
    } else {
        removeClasses();
        e.target.classList.add("chosed");
        e.target.nextElementSibling.style.height = e.target.nextElementSibling.scrollHeight + 'px';
    }

}
function removeClasses() {
    btns.forEach((e => {
        e.classList.remove("chosed");
    }));
    pArr.forEach((e => {
        e.style.height = 0;
    }));

}