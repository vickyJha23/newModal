const openModal = document.querySelector(".open_modal");
const modal = document.querySelector("#modal");
const modalImg = document.querySelector("#modal-img");
const caption = document.querySelector(".caption");
openModal.onclick = function(){
     modal.style.display = "block";
     modalImg.src = this.src;
     caption.textContent = this.alt;
}
const closeBtn = document.querySelector(".close_btn");
console.log(closeBtn);
closeBtn.onclick = function() {
     modal.style.display = "none";
}

