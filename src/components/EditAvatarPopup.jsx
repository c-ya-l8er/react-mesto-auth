import React, { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm.jsx";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
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
        ref={avatarRef}
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
