import React, { useRef, useEffect, useCallback } from "react";

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

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, []);

  // useEffect(() => {
  //   const handleOverlayClose = (e) => {
  //     if (ref.current && !ref.current.contains(e.target)) {
  //       console.log("pam-pam");
  //       onClose();
  //     }
  //   };
  //   document.addEventListener("mousedown", handleOverlayClose);

  //   return () => document.removeEventListener("mousedown", handleOverlayClose);
  // }, []);

  function handleOverlayClose() {
    const handleClick = useCallback(
      (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("pam-pam");
          onClose();
        }
      }
    );
    useEffect(() => {
      document.addEventListener("mousedown", handleClick);
      return (
        () => {
          document.removeEventListener("mousedown", handleClick);
        },
        [handleClick]
      );
    });
  }

  return (
    <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div onClick={handleOverlayClose} className="popup__container" ref={ref}>
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
