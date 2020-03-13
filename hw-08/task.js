'use strict';
import galleryItems from './gallery-items.js';

const gallery = document.querySelector ('.js-gallery');
const lightBox = document.querySelector ('.js-lightbox');
const buttonCloseModal = document.querySelector (
  'button[data-action="close-lightbox"]'
);

createGalleryItems (galleryItems);

gallery.addEventListener ('click', handleClickChangeSizeImg);
buttonCloseModal.addEventListener ('click', handleCloseModal);

function handleCloseModal (event) {
  lightBox.classList.remove ('is-open');
}

function handleClickChangeSizeImg (event) {
  event.preventDefault ();
  const modalImage = document.querySelector ('.js-lightbox > div > img');
  const currentAttribute = event.target.getAttribute ('data-source');
  if (modalImage.getAttribute ('src' !== ' ')) {
    return modalImage.removeAttribute ('src');
  }
  lightBox.classList.add ('is-open');
  modalImage.setAttribute ('src', currentAttribute);
}

function createGalleryItems (items) {
  const markup = items.map (item => {
    const itemOfList = document.createElement ('li');
    const linkOfItem = document.createElement ('a');
    const imagesOfLink = document.createElement ('img');
    itemOfList.classList.add ('gallery__item');
    linkOfItem.classList.add ('gallery__link');
    linkOfItem.setAttribute ('href', `${item.original}`);
    imagesOfLink.classList.add ('gallery__image');
    imagesOfLink.setAttribute ('src', `${item.preview}`);
    imagesOfLink.setAttribute ('data-source', `${item.original}`);
    imagesOfLink.setAttribute ('alt', `${item.description}`);
    linkOfItem.append (imagesOfLink);
    itemOfList.append (linkOfItem);
    gallery.append (itemOfList);
  });
}
