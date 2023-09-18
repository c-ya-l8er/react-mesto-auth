import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm.jsx";
import { useForm } from "../hooks/useForm.jsx";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const { values, handleChange, setValues } = useForm({});

  useEffect(() => {
    setValues({});
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: values.name,
      link: values.link,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add-card"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitBtnText={"Создать"}
      loadingBtnText={"Создание..."}
      isLoading={isLoading}
    >
      <input
        onChange={handleChange}
        value={values.name || ""}
        className="popup__input popup__input_type_cardname"
        id="cardname-input"
        minLength="2"
        maxLength="30"
        required
        type="text"
        name="name"
        placeholder="Название"
      />
      <span className="popup__input-error cardname-input-error" />
      <input
        onChange={handleChange}
        value={values.link || ""}
        className="popup__input popup__input_type_link"
        id="link-input"
        required
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
      />
      <span className="popup__input-error link-input-error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
