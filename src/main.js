import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api.js';

const cardContainer = document.querySelector('.card-container');
const searchForm = document.querySelector('.search-form');
const loading = document.querySelector('.loader');

searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const query = form.elements.query.value;

  cardContainer.innerHTML = '';

  showLoadingIndicator();

  fetchImages(query)
    .then(renderImagesCard)
    .catch(onFetchError)
    .finally(() => {
      form.reset();
      hideLoadingIndicator();
    });
}

function renderImagesCard(data) {
  if (data.hits && data.hits.length > 0) {
    const markup = data.hits
      .map(
        ({
          webformatURL,
          largeImageURL,
          likes,
          views,
          comments,
          downloads,
          tags,
        }) => {
          const tagsString = tags.split(',').join(', ');
          return `<div class="card">
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tagsString}" />
      </a>
    <div class="card-properties">
        <ul class="card-list">
            <li>Likes <span class="accent-item">${likes}</span></li>
            <li>Views <span class="accent-item">${views}</span></li>
            <li>Comments <span class="accent-item">${comments}</span></li>
            <li>Downloads <span class="accent-item">${downloads}</span></li>
        </ul>
    </div>
    </div>`;
        }
      )
      .join('');

    cardContainer.insertAdjacentHTML('beforeend', markup);

    const lightbox = new SimpleLightbox('.card-container a', {
      captionsData: 'alt',
      captionDelay: 250,
    });

    lightbox.refresh();
  } else {
    iziToast.error({
      message: `Sorry, there are no images matching your search query. Please try again!`,
      position: 'topRight',
      titleColor: 'white',
      messageColor: 'white',
      timeout: 5000,
      backgroundColor: '#EF4040',
    });
  }
}

function onFetchError(error) {
  console.log(error);

  iziToast.error({
    message: `Sorry, there are no images matching your search query. Please try again!`,
    position: 'topRight',
    titleColor: 'white',
    messageColor: 'white',
    timeout: 5000,
    backgroundColor: '#EF4040',
  });
}


function showLoadingIndicator() {
  loading.style.display = 'block';
}

function hideLoadingIndicator() {
  loading.style.display = 'none';
}