import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm.jsx";
import { useForm } from "../hooks/useForm.jsx";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const { values, handleChange, setValues } = useForm({});

  useEffect(() => {
    setValues({});
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: values.avatar,
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitBtnText={"Сохранить"}
      loadingBtnText={"Сохранение..."}
      isLoading={isLoading}
    >
      <input
        onChange={handleChange}
        value={values.avatar || ""}
        className="popup__input popup__input_type_avatar"
        id="avatar-input"
        required
        type="url"
        name="avatar"
        placeholder="Ссылка на новый аватар"
      />
      <span className="popup__input-error avatar-input-error" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
