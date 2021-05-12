
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

const locationBox = document.getElementsByClassName('location-box')

const locationBg = document.getElementsByClassName('location-bg')
// const locationBgOpacity = (e) => { e.style.opacity = "50%" }
// const locationBgOpacityReset = (e) => { e.style.opacity = "1" }

const locationBgOpacity = (e) => e.classList.toggle('location-hover')

for (let i = 0; i < locationBox.length; i++) {
    console.log({locationBox: locationBox})
    locationBox[i].addEventListener('mouseover',
        () => {
            console.log("yo!")
            // console.log(locationBox[i].style.opacity)
            // console.log({ bg: locationBg[i] })
            locationBgOpacity(locationBg[i])
            // locationBox[i].addEventListener( 'mouseout',
            // () => { 
            //     locationBgOpacityReset(locationBg[i])
            // }, false
            // )

        })
    locationBox[i].addEventListener('mouseout',
        () => {

            console.log("mouseout!")
            // console.log(locationBox[i].style.opacity)
            // console.log({ bg: locationBg[i] })
            locationBgOpacity(locationBg[i])
            // locationBox[i].addEventListener( 'mouseout',
            // () => { 
            //     locationBgOpacityReset(locationBg[i])
            // }, false
            // )

        })
}



