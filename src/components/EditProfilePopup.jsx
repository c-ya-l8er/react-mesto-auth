import React, { useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.jsx";
import PopupWithForm from "./PopupWithForm.jsx";
import { useForm } from "../hooks/useForm.jsx";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, setValues } = useForm({});

  useEffect(() => {
    setValues({ name: currentUser.name, about: currentUser.about });
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: values.name,
      about: values.about,
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
        value={values.name || ""}
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
        value={values.about || ""}
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
