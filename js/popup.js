const popup = document.querySelector('.write-to-us-modal');
const button = document.querySelector('.button-info-contacts');
const modalClose = document.querySelector('.modal-close');
const writeForm = document.querySelector('.write-to-us-form');
const writeName = document.querySelector('.your-name');
const writeEmail = document.querySelector('.your-email');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('write-to-us-modal-show');

  if (storage) {
      writeName.value = storage;
      writeEmail.focus();
  } else {
      writeName.focus();
  }
});

modalClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('write-to-us-modal-show');
  popup.classList.remove('modal-error')
});

writeForm.addEventListener('submit', function (evt) {
  if (!writeName.value || !writeEmail.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
    localStorage.setItem('name', writeName.value);
    }  
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('write-to-us-modal-show')) {
      evt.preventDefault();
      popup.classList.remove('write-to-us-modal-show');
      popup.classList.remove('modal-error');
    }
  };
});