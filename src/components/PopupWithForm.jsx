import React, { useRef } from "react";
import { usePopupClose } from "../hooks/usePopupClose.jsx";

function PopupWithForm({
  title,
  name,
  children,
  isOpen,
  onClose,
  onSubmit,
  submitBtnText,
  isLoading,
  loadingBtnText,
}) {
  const ref = useRef();

  return (
    <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div
        onClick={usePopupClose(isOpen, onClose)}
        className="popup__container"
        ref={ref}
      >
        <button
          onClick={onClose}
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть"
        />
        <h2 className="popup__title">{`${title}`}</h2>
        <form
          onSubmit={onSubmit}
          className={`popup__form popup__form_${name}`}
          name={`${name}_form`}
          noValidate
        >
          {children}
          <button className="popup__submit-btn" type="submit">
            {isLoading ? loadingBtnText : submitBtnText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
