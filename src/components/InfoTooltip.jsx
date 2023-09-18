import React from "react";
import failIcon from "../images/fail.svg";
import successIcon from "../images/success.svg";
import { usePopupClose } from "../hooks/usePopupClose.jsx";

function InfoTooltip({ regStatus, isOpen, onClose }) {
  usePopupClose(isOpen, onClose);

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          onClick={onClose}
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть"
        />
        <img
          className="popup__icon"
          src={regStatus ? successIcon : failIcon}
          alt="статус регистрации"
        />
        <h2 className="popup__title">
          {regStatus
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте еще раз."}
        </h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
