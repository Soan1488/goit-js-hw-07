import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const imagesMarkup = createImagesMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', imagesMarkup);
galleryEl.addEventListener('click', onImageClick);

function createImagesMarkup(galleryItems) {
    return galleryItems.map(image => `<div class="gallery__item"><a class="gallery__link" href="${image.original}">
     <img class="gallery__image" src="${image.preview}" data-source="${image.original}" 
     alt="${image.description}"/></a></div>`).join('');
}


function onImageClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`)
    instance.show();
    window.addEventListener('keydown', onKeyPress);

    function onKeyPress(evt) {
    if (instance.visible() && evt.code === "Escape") {
        instance.close()
        
    }
    window.removeEventListener('keydown', onKeyPress)
}
} 
