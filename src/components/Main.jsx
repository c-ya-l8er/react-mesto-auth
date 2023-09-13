import React, { useContext } from "react";
import Card from "./Card.jsx";
import { CurrentUserContext } from "../contexts/CurrentUserContext.jsx";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete,
  onCardDeleteClick,
  cards,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <button
          onClick={onEditAvatar}
          className="profile__avatar-btn"
          type="button"
          aria-label="Редактировать"
        >
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Аватар"
          />
        </button>
        <div className="profile__info">
          <h1 className="profile__username">{currentUser.name}</h1>
          <button
            onClick={onEditProfile}
            className="profile__edit-btn"
            type="button"
            aria-label="Редактировать"
          />
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button
          onClick={onAddPlace}
          className="profile__add-btn"
          type="button"
          aria-label="Добавить"
        />
      </section>

      <section className="cards" aria-label="галерея фото">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
            onCardDeleteClick={onCardDeleteClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
