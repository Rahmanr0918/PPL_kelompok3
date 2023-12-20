// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

function loadContent(page) {
  // Menggunakan Fetch API untuk mendapatkan konten dari file eksternal
  fetch(page)
    .then(response => response.text())
    .then(data => {
      var contentDiv = document.getElementById('main');
      contentDiv.innerHTML = data;
    })
    .catch(error => console.error('Error fetching content:', error));
}