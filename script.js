// script.js

const modal = document.getElementById("certificateModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const closeButton = document.querySelector(".modal-close");

document.querySelectorAll(".certificate-image").forEach((image) => {
    image.addEventListener("click", () => {
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        modalTitle.textContent = image.dataset.title || image.alt;

        modal.classList.add("show");
        modal.setAttribute("aria-hidden", "false");
    });
});

function closeModal() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    modalImage.src = "";
}

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});
