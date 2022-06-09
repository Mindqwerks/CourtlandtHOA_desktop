// https://www.w3schools.com/howto/howto_css_modals.asp
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
// https://javascript.plainenglish.io/4-ways-to-create-a-modal-popup-box-with-html-css-and-vanilla-javascript-4bd1e95d0f92
"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  console.log("button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
