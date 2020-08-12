document.addEventListener("scroll", addBanner);
function addBanner() {
    if (pageYOffset > 1000) {
        var banner = document.querySelector(".banner");
        banner.style.display = "flex";
        var close = document.querySelector(".close");
        close.addEventListener('click', (e) => {
            banner.style.display = "none";
            document.removeEventListener("scroll", addBanner);
        })
    }
}

