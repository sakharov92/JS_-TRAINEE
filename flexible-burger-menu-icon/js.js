const btn = document.querySelector(".burger-menu"); addEventListener('click', (e) => {
    btn.classList.contains("active") ? btn.classList.remove("active") : btn.classList.add("active");
})