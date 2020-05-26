const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;


menuBtn.addEventListener('click', () => {
    document.querySelector("#menu").classList.toggle("hidden");

    let menuOpen = document.querySelector("#menu").classList.contains("hidden");

    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});
