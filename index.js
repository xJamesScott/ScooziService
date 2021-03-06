
// Mobile menu

const menuOpen = document.getElementById('mobile-menu-open');
const menuClose = document.getElementById('mobile-menu-closed');
const navMenu = document.getElementById('mobile-nav-menu');
const dimmer = document.getElementById('dimmer');

const toggleOpen = () => { menuOpen.classList.toggle("show") };
const toggleClose = () => { menuClose.classList.toggle("show") };
const toggleMenu = () => { navMenu.classList.toggle("show") };
const toggleDim = () => { dimmer.classList.toggle("show") };

const menuToggle = () => {
    toggleOpen();
    toggleClose();
    toggleMenu();
    toggleDim();
};
menuClose.addEventListener("click", (e) => { menuToggle() });
menuOpen.addEventListener("click", (e) => { menuToggle() });

// Request form modal

const inviteForm = document.getElementById('invite-form');
const salesForm = document.getElementById('sales-form');
const dimmerForm = document.getElementById('dimmer-form');
const toggleDimForm = () => { dimmer.classList.toggle("show") };
const inviteFormToggle = () => {
    inviteForm.classList.toggle("form-visible");
};

const salesFormToggle = () => {
    salesForm.classList.toggle("form-visible");
};

const salesFormTriggerButtons = document.getElementsByClassName('sales-button')
for (let i = 0; i < salesFormTriggerButtons.length; i++) {
    salesFormTriggerButtons[i].addEventListener("click",
        (e) => {
            salesFormToggle();
            toggleDimForm();
        }
    );
};

const formTriggerButtons = document.getElementsByClassName('form-button');
for (let i = 0; i < formTriggerButtons.length; i++) {
    formTriggerButtons[i].addEventListener("click",
        (e) => {
            inviteFormToggle();
            toggleDimForm();
        }
    );
};

// Map marker hover

const locationBox = document.getElementsByClassName('location-box');
const locationBg = document.getElementsByClassName('location-bg');
const locationBgOpacity = (e) => e.classList.toggle('location-hover');

for (let i = 0; i < locationBox.length; i++) {
    locationBox[i].addEventListener('mouseover',
        () => {
            locationBgOpacity(locationBg[i])
        });
    locationBox[i].addEventListener('mouseout',
        () => {
            locationBgOpacity(locationBg[i]);
        });
};

const formSubmitButtons = document.getElementsByClassName('form-submit');
const formSubmitConfirmations = document.getElementsByClassName('form-submit-confirmation');
const formContent = document.getElementsByClassName('form-content');
const handleFormSubmit = (e) => e.classList.toggle('show');
const submitForm = (e) => e.submit();
const handleFormHide = (e) => e.classList.toggle('hide');
for (let i = 0; i < formSubmitButtons.length; i++) {

    formSubmitButtons[i].addEventListener('click',
        (e) => {
            e.preventDefault();
            handleFormSubmit(formSubmitConfirmations[i]);
            handleFormHide(formContent[i]);
            setTimeout(
                () => {
                    submitForm(formContent[i]);
                }, 1700
            )
        });
};





