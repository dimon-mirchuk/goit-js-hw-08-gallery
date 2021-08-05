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
    modalBox.classList.add("is-open");
};

imagesGallery.addEventListener("click", modalOpen);


const closeModal = (evt) => {
    modalBox.classList.remove("is-open");
    modalImage.src = "";
    modalImage.alt = "";
};

closeModalBtn.addEventListener("click", closeModal);
overlayCloseModal.addEventListener("click", closeModal);


const keyPressOpt = (evt) => {
  const esc = 'Escape';
  const arrowRight = 'ArrowRight';
  const arrowLeft = 'ArrowLeft';
  const originalImagesArr = galleryItems.map(({ original }) => original);
  let currentImage = originalImagesArr.indexOf(modalImage.src);
    
  switch (evt.code) {
    case esc:
      closeModal();
      break;
    case arrowRight:
      nextImage();
      break;
    case arrowLeft:
      previousImage();
      break;
  }

  function previousImage() {
    currentImage === 0 ? (currentImage = originalImagesArr.length - 1) : (currentImage -= 1);
    modalImage.src = originalImagesArr[currentImage];
    modalImage.alt = originalImagesArr[currentImage].description;
}
function nextImage() {
  currentImage === originalImagesArr.length - 1 ? (currentImage = 0) : (currentImage += 1);
  modalImage.src = originalImagesArr[currentImage];
  modalImage.alt = originalImagesArr[currentImage].description;
}
}
    
document.addEventListener("keydown", keyPressOpt);
