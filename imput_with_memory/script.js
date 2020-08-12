var inps = document.querySelectorAll("input");
inps.forEach((e) => {
    e.addEventListener("change", func());
})
function func() {
    var currentItem;
    var arr = [];
    function forward() {
        if (currentItem < arr.length - 1) {
            event.target.parentElement.querySelector("input").value = arr[currentItem+1];
            currentItem++;
            console.log("forward");
            console.log(currentItem);
        }
    }
    function back() {
        if (currentItem > 0) {
            console.log(arr[currentItem])
            event.target.parentElement.querySelector("input").value = arr[currentItem-1];
            currentItem--;
            console.log("back");
            console.log(currentItem);
        }
    }
    return function (event) {
        var btnForward = event.target.parentElement.querySelector(".right");
        var btnBack = event.target.parentElement.querySelector(".left");
        btnForward.addEventListener("click", forward);
        btnBack.addEventListener("click", back);
        arr.push(event.target.value);
        currentItem = arr.length - 1;
        console.log(currentItem);

    }
}
