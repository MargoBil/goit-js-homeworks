'use strict';
import galleryItems from './gallery-items.js';
let arrayOfImg = [];
const gallery = document.querySelector ('.js-gallery');
const lightBox = document.querySelector ('.js-lightbox');
const image = document.querySelector ('.lightbox__image');
createGalleryItems (galleryItems);
const sliderOfModalWindow = document.querySelectorAll ('.js-gallery > li > a');
const modalImage = document.querySelector ('.js-lightbox > div > img');
getArrayOfAllOriginalImages (sliderOfModalWindow);
gallery.addEventListener ('click', handleClickChangeSizeImg);
lightBox.addEventListener ('click', handleClickCloseModal);

function handleClickChangeSizeImg (event) {
  event.preventDefault ();
  const currentAttribute = event.target.getAttribute ('data-source');
  if (modalImage.getAttribute ('src' !== ' ')) {
    return modalImage.removeAttribute ('src');
  }
  lightBox.classList.add ('is-open');
  modalImage.setAttribute ('src', currentAttribute);
  window.addEventListener ('keydown', handleKeyPress);
  window.addEventListener ('keydown', handleKeyChangeQueueRight);
  window.addEventListener ('keydown', handleKeyChangeQueueLeft);
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

function handleClickCloseModal (event) {
  if (event.target === image) {
    return;
  }
  lightBox.classList.remove ('is-open');
  window.removeEventListener ('keydown', handleKeyPress);
  window.removeEventListener ('keydown', handleKeyChangeQueueRight);
  window.removeEventListener ('keydown', handleKeyChangeQueueLeft);
}

function handleKeyPress (event) {
  if (event.key !== 'Escape') {
    return;
  }
  lightBox.classList.remove ('is-open');
}

function getArrayOfAllOriginalImages (items) {
  items.forEach (item => {
    arrayOfImg.push (item.getAttribute ('href'));
  });
  return arrayOfImg;
}

function handleKeyChangeQueueRight (event) {
  if (event.key !== 'ArrowRight') {
    return;
  }
  let indexCurrentImg = arrayOfImg.indexOf (event.target.getAttribute ('href'));
  let nextLink = arrayOfImg[indexCurrentImg + 1];
  if (indexCurrentImg === arrayOfImg.length - 1) {
    nextLink = arrayOfImg[0];
  }
  return modalImage.setAttribute ('src', (event.target.href = nextLink));
}

function handleKeyChangeQueueLeft (event) {
  if (event.key !== 'ArrowLeft') {
    return;
  }
  let indexCurrentImg = arrayOfImg.indexOf (event.target.getAttribute ('href'));
  let nextLink = arrayOfImg[indexCurrentImg - 1];
  if (indexCurrentImg === 0) {
    nextLink = arrayOfImg[arrayOfImg.length - 1];
  }
  return modalImage.setAttribute ('src', (event.target.href = nextLink));
}
