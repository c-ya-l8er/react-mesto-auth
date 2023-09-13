export const cardListSection = ".cards";

// модальные окна
export const editPopup = document.querySelector(".popup_edit-profile");
export const addPopup = document.querySelector(".popup_add-card");
export const imagePopup = document.querySelector(".popup_open-image");
export const popupElement = document.querySelectorAll(".popup");
export const avatarPopup = document.querySelector(".popup_edit-avatar");
export const confirmPopup = document.querySelector(".popup_confirm");

// кнопки
export const openEditPopupButton = document.querySelector(".profile__edit-btn");
export const openAddPopupButton = document.querySelector(".profile__add-btn");
export const openAvatarPopupButton = document.querySelector(".profile__avatar-btn");
export const openConfirmPopupButton = ".card__trash-btn";
export const confirmBtn = confirmPopup.querySelector(".popup__submit-btn")
//console.log(confirmBtn);
//console.log(openConfirmPopupButton);


export const closePopupButtons = document.querySelectorAll(".popup__close-btn");

// редактирование профиля
export const profileName = ".profile__username";
export const profileAbout = ".profile__about";
export const profileAvatar = ".profile__avatar";

// формы
export const formProfileEdit = document.forms.profile_edit_form;
export const nameInput = formProfileEdit.elements.name;
export const aboutInput = formProfileEdit.elements.about;

export const formAddCard = document.forms.new_card_form;
export const cardInput = formAddCard.elements.name;
export const linkInput = formAddCard.elements.link;

export const formEditAvatar = document.forms.edit_avatar_form;
export const avatarInput = formEditAvatar.elements.avatar;

// export const initialCards = [
//   {
//     name: "Архыз",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
//   },
//   {
//     name: "Челябинская область",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
//   },
//   {
//     name: "Иваново",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
//   },
//   {
//     name: "Камчатка",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
//   },
//   {
//     name: "Холмогорский район",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
//   },
//   {
//     name: "Байкал",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//   },
// ];

export const validationConfig = {
  formElement: ".popup__form",
  inputElement: ".popup__input",
  buttonElement: ".popup__submit-btn",
  inactiveButtonClass: "popup__submit-btn_disabled",
  inputErrorClass: "popup__input_invalid",
  errorClass: "popup__input-error_active",
};


//Токен: a04dfc18-37ef-4557-8dab-9c7099f92080
//Идентификатор группы: cohort-71"