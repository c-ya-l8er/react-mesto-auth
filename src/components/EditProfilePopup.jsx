import React, { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.jsx";
import PopupWithForm from "./PopupWithForm.jsx";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);
 
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChange(e) {
    const value = e.target.value;
    const inputName = e.target.name;
    if (inputName == "name") {
      setName(value);
    } else if (inputName == "about") {
      setDescription(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitBtnText={"Сохранить"}
      loadingBtnText={"Сохранение..."}
      isLoading={isLoading}
    >
      <input
        onChange={handleChange}
        value={name || ""}
        className="popup__input popup__input_type_username"
        id="username-input"
        minLength="2"
        maxLength="40"
        required
        type="text"
        name="name"
        placeholder="Имя"
      />
      <span className="popup__input-error username-input-error" />
      <input
        onChange={handleChange}
        value={description || ""}
        className="popup__input popup__input_type_about"
        id="about-input"
        minLength="2"
        maxLength="200"
        required
        type="text"
        name="about"
        placeholder="О себе"
      />
      <span className="popup__input-error about-input-error" />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
