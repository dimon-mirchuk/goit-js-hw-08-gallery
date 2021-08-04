import galleryItems from "./app.js";

const imagesGallery = document.querySelector(".js-gallery");
const modalImage = document.querySelector(".lightbox__image");
const modalBox = document.querySelector(".js-lightbox");
const closeModalBtn = document.querySelector(".lightbox__button");
const overlayCloseModal = document.querySelector(".lightbox__overlay");


const createEl = () => {
    const galleryTags = ({ preview, original, description }) =>
        `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"></a></li>`;
    const collectGallery = galleryItems.map(galleryTags).join(" ");
    imagesGallery.insertAdjacentHTML("beforeend", collectGallery);
};
createEl(galleryItems);


const modalOpen = (evt) => {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return
    }
    const imgRef = evt.target;
    const originalImg = imgRef.dataset.source;
    modalImage.src = originalImg;
    modalImage.alt = imgRef.alt;
    modalImage.dataset.index = imgRef.dataset.index;
    modalBox.classList.add("is-open");
};

imagesGallery.addEventListener("click", modalOpen);


const closeModal = (evt) => {
    modalBox.classList.remove("is-open");
    modalImage.src = " ";
    modalImage.alt = " ";
    modalImage.dataset.index = " ";
};

closeModalBtn.addEventListener("click", closeModal);
overlayCloseModal.addEventListener("click", closeModal);