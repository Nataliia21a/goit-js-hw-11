import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchPhotosByQuery } from './js/pixabay-api';
import { createGalleryItemMarkup } from './js/render-functions';

const searchquery = document.querySelector('.input-search');
const btnSearch = document.querySelector('.btn-search');
const galleryEl = document.querySelector('.gallery');
const galleryItem = document.querySelector('.gallery-item');
const galleryLink = document.querySelector('.gallery-link');
const galleryImage = document.querySelector('.gallery-image');
const galleryCard = document.querySelector('.gallery-card');
const loader = document.querySelector('.loader');

fetchPhotosByQuery()
  .then(imageData => {
    galleryEl.innerHTML = createGalleryItemMarkup(imageData.hits);
  })
  .catch(error => console.log(error));

function onBtnSubmit(event) {
  event.preventDefault();
  const searchImages = event.target.elements.searchImages.value.trim();
}

// const userSearchData = searchquery.value.trim();

// fetchPhotosByQuery().then(userSearchData => {
//   const createLists = images.map(creatListGallery);
//   galleryEl.append(...createLists);
// });
