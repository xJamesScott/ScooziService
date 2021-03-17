var coll = document.getElementsByClassName("faq-button");
var collMark = document.getElementsByClassName("faq-button");
// var i;

// for (var i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         var content = this.nextElementSibling;
//         if (content.style.maxHeight) {
//             content.style.maxHeight = null;
//             content.style.height = "50rem";
//         } else {
//             content.style.maxHeight = content.scrollHeight + "2rem";
//             content.style.height = "0";
//         }
//     });
// }

//Option 2

// var mark2 = document.querySelector("mark");
// for (var i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         var content = this.nextElementSibling;
//         content.classList.toggle("accordion-open");

//         mark2.classList.toggle("accordion-open")

//     });
// }

//Option 3

// var accItem = document.getElementsByClassName('faq-button');
// var accHD = document.getElementsByClassName('panels');
// for (i = 0; i < accHD.length; i++) {
//     accHD[i].addEventListener('click', toggleItem, false);
// }
// function toggleItem() {
//     var itemClass = this.parentNode.className;
//     for (i = 0; i < accItem.length; i++) {
//         accItem[i].className = 'closed';
//     }
//     if (itemClass == 'closed') {
//         this.parentNode.className = 'accordion-open';
//     }
// }

//Option 4

var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
   if (itemClass == 'color') {
        this.firstChild.className = 'add-color';
    }
  else {
    this.parentNode.className = 'color';
  }
}


