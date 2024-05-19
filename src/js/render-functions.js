'use strict';

export const createGalleryItemMarkup = images => {
  return images
    .map(
      image =>
        `
      <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="${image.tags}"
          />
          <ul class="gallery-card">
            <li>
              <p>likes</p>
              <p>${image.likes}</p>
            </li>
            <li>
              <p>views</p>
              <p>${image.views}</p>
            </li>
            <li>
              <p>comments</p>
              <p>${image.comments}</p>
            </li>
            <li>
              <p>downloads</p>
              <p>${image.downloads}</p>
            </li>
          </ul>
        </a>
      </li>`
    )
    .join('');
};

// const galleryEl = document.querySelector('.gallery');

// export const creatListGallery = image => {
//   const listsGalleryEl = document.createElement('li');
//   listsGalleryEl.classList.add('gallery-item');
//   const galleryLinkEl = document.createElement('a');
//   galleryLinkEl.classList.add('gallery-link');
//   galleryLinkEl.href = image.largeImageURL;
//   const galleryImageEl = document.createElement('img');
//   galleryImageEl.classList.add('gallery-image');
//   //   galleryImageEl.src = image.preview;
//   // galleryImageEl.setAttribute('data-source', image.original);
//   //   galleryImageEl.alt = image.description;
//   galleryImageEl.width = 360;
//   galleryImageEl.height = 200;
//   galleryImageEl.display = 'block';
//   // знімаємо автоматичні налаштування списку
//   listsGalleryEl.style.listStyle = 'none';
//   listsGalleryEl.append(galleryLinkEl);
//   galleryLinkEl.append(galleryImageEl);
//   return listsGalleryEl;
// };

// const createLists = images.map(creatListGallery);
// galleryEl.append(...createLists);

// galleryEl.style.display = 'flex';
// galleryEl.style.flexWrap = 'wrap';
// galleryEl.style.gap = '20px 24px';
// galleryEl.style.justifyContent = 'center';

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const gallery = new SimpleLightbox('.gallery a', {
//   captions: true,
//   captionsData: 'alt',
//   captionDelay: 250,
// });
