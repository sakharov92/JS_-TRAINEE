var btn = document.querySelector("button");
btn.addEventListener("click", check);
var arrInp = document.querySelectorAll("input");
var count = 0;

function check() {
    arrInp.forEach(function (e) {
        if (e.value == "true" && e.checked) {
            e.parentElement.style.color = "green"
            count++;
        } else {
            if (e.value != "true" && e.checked) {
                e.parentElement.style.color = "red";
            }
        }
    })
    console.log(Math.floor((count / 3) * 100) + "%");
}