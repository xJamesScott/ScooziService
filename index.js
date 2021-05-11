
const menuOpen = document.getElementById('mobile-menu-open');
const menuClose = document.getElementById('mobile-menu-closed');
const navMenu = document.getElementById('mobile-nav-menu');
const dimmer = document.getElementById('dimmer');

const toggleOpen = () => { menuOpen.classList.toggle("show") };
const toggleClose = () => { menuClose.classList.toggle("show") };
const toggleMenu = () => { navMenu.classList.toggle("show") }
const toggleDim = () => { dimmer.classList.toggle("show") }

const menuToggle = () => {
    toggleOpen()
    toggleClose()
    toggleMenu()
    toggleDim()

};
menuClose.addEventListener("click", (e) => { menuToggle() });
menuOpen.addEventListener("click", (e) => { menuToggle() });

const inviteForm = document.getElementById('invite-form')
const dimmerForm = document.getElementById('dimmer-form');

const toggleDimForm = () => { dimmer.classList.toggle("show") }

const inviteFormToggle = () => {
    inviteForm.classList.toggle("form-visible")

}

const formTriggerButtons = document.getElementsByClassName('form-button')

for (let i = 0; i < formTriggerButtons.length; i++) {
    formTriggerButtons[i].addEventListener("click",
        (e) => {
            inviteFormToggle()
            toggleDimForm()
            console.log("yooo!")
        }
    )
}



