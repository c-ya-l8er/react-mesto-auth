import PopupWithForm from "./PopupWithForm.jsx";

function PopupWithConfirm({ card, isOpen, onClose, onCardDelete, isLoading }) {
  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete(card);
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="confirm"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitBtnText={"Да"}
      loadingBtnText={"Удаление..."}
      isLoading={isLoading}
    />
  );
}

export default PopupWithConfirm;
