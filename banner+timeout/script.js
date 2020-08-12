setTimeout(addBanner, 3000);
function addBanner() {

    var banner = document.querySelector(".banner");
    banner.style.display = "flex";
    var close = document.querySelector(".close");
    close.addEventListener('click', (e) => {
        banner.style.display = "none";
        document.removeEventListener("scroll", addBanner);
    })

}

