const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");


openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});


closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});




