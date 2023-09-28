// bagian button sidebar
const menuBtn = document.querySelectorAll(".menu-btn");
for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click", checkMenu);
}

// bagian black overlay
const blackOverlay = document.getElementById("black");
blackOverlay.addEventListener("click", checkMenu);

// bagian navbar
const nav = document.getElementById("nav");
nav.querySelector("p").addEventListener("click", function () {
    location.href = 'index.html';
})

// teks judul di navbar
const navTitle = document.getElementById("navTitle");
navTitle.innerHTML = "Lumiere Coffe";

// bagian search container
const searchCon = document.querySelector(".searchCon");
searchCon.querySelector(".search").querySelector("input").addEventListener("keyup", function () {
    if (event.keyCode == 13) { searchItem(); }
})

// section header
const sectionHeader = document.getElementById("sectionHeader");
sectionHeader.innerHTML = "Store | Breads";

// backend
const productAjax = new XMLHttpRequest();
productAjax.onload = function () {
    const productData = JSON.parse(this.responseText);
    console.log(productData.beverage.bv2.price);
}
productAjax.open("GET", "http://127.0.0.1:5500/Lumiere/data/product.json");
productAjax.send();