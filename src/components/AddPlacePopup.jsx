import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm.jsx";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleChange(e) {
    const value = e.target.value;
    const inputName = e.target.name;
    if (inputName == "name") {
      setName(value);
    } else if (inputName == "link") {
      setLink(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link,
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
        value={name || ""}
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
        value={link || ""}
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
