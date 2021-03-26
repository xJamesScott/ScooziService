
document.getElementById("yo").innerHTML = test;

const menuOpen = document.getElementById('mobile-menu-open')
const menuClose = document.getElementById('mobile-menu-closed')
const hideOpen = menuOpen.classList.remove("show")
const setMenuClose = menuClose.classList.add("show")
const setMenuOpen = menuOpen.classList.add("show")

const menuToggle = () => {
    if (menuOpen.classList = "show") {
        hideOpen()
        showClose()
    } else {
        setMenuClose()
        setMenuOpen()
    }
};

