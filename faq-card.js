const parent = document.getElementsByClassName('accordion');

for (let i = 0; i < parent.length; i++) {
  parent[i].addEventListener("click", function () {
    this.classList.toggle('show');
  });
};


