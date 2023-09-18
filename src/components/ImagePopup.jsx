import { usePopupClose } from "../hooks/usePopupClose.jsx";

function ImagePopup({ card, isOpen, onClose }) {
  usePopupClose(isOpen, onClose);

  return (
    <div className={`popup popup_open-image ${isOpen ? "popup_opened" : ""}`}>
      <figure className="popup__figure">
        <button
          onClick={onClose}
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть"
        />
        <img className="popup__image" src={card?.link} alt={card?.name} />
        <figcaption className="popup__caption">{card?.name}</figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
