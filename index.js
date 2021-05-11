
// document.getElementById("yo").innerHTML = test;



const menuOpen = document.getElementById('mobile-menu-open');
const menuClose = document.getElementById('mobile-menu-closed');
const navMenu = document.getElementById('mobile-nav-menu');
const dimmer = document.getElementById('dimmer');
// const hideOpen = () => { menuOpen.classList.remove("show") };
// const hideClose = () => { menuClose.classList.remove("show") };
// const showMenuClose = () => { menuClose.classList.add("show, bro") };
// const showMenuOpen = () => { menuOpen.classList.add("show") };

const toggleOpen = () => { menuOpen.classList.toggle("show") };
const toggleClose = () => { menuClose.classList.toggle("show") };
const toggleMenu = () => { navMenu.classList.toggle("show") }
const toggleDim = () => { dimmer.classList.toggle("show") }

// const pink = function (e) { alert("yoo!") }

const menuToggle = () => {
    // alert("menuToggle!")
    // setMenuOpen();
    // if (menuOpen.classList = "show") {
    //     hideOpen()
    //     showMenuClose()
    // } else {
    //     hideClose()
    //     showMenuOpen()
    // }

    toggleOpen()
    toggleClose()
    toggleMenu()
    toggleDim()

};
menuClose.addEventListener("click", (e) => { menuToggle() });
menuOpen.addEventListener("click", (e) => { menuToggle() });

const inviteForm = document.getElementById('invite-form')

const inviteFormToggle = () => {
    inviteForm.classList.toggle("form-visible")
}

const formTriggerButtons = document.getElementsByClassName('form-button')

for (let i = 0; i < formTriggerButtons.length; i++) {
    formTriggerButtons[i].addEventListener("click",
        (e) => {
            inviteFormToggle()
            console.log("yooo!")
        }
    )
}



