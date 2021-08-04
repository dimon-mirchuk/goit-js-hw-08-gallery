import galleryItems from "./app.js"

let refs = {
    imagesGallery: document.querySelector(".js-gallery"),
    modalImage: document.querySelector(".lighbox__image"),
    modalBox: document.querySelector(".js-lightbox"),
    closeModalBtn: document.querySelector(".lightbox__button"),
    overlayCloseModal: document.querySelector("lightbox__overlay")
}

const createEl = () => {
    const galleryTags = ({ preview, original, description }) =>
    `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"></a></li>`;
    const collectGallery = galleryItems.map(galleryTags).join(" ")
    refs.imagesGallery.insertAdjacentHTML("beforeend", collectGallery)
}

createEl(galleryItems)