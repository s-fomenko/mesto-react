import React from 'react';
import api from '../utils/api'

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then(user => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
      });

    api.getCards()
      .then(cards => {
        setCards(cards);
      })
  }, []);

  const cardsList = cards.map((card, index) => (
    <article className="card" key={index}>
      <img className="card__image" src={card.link} alt={card.name}/>
      <div className="card__inner">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__wrapper">
          <button className="card__button card__button_type_like" type="button"/>
          <span className="card__likes-count">{card.likes.length}</span>
        </div>
      </div>
      <button className="card__button card__button_type_remove" type="button"/>
    </article>
  ));

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img className="profile__avatar" src={userAvatar} alt="аватар пользователя"/>
          <button className="profile__button profile__button_type_avatar-edit" type="button" onClick={props.onEditAvatar}/>
        </div>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__button profile__button_type_edit" type="button" onClick={props.onEditProfile}/>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button className="profile__button profile__button_type_add" type="button" onClick={props.onAddPlace}/>
      </section>
      <section className="elements">{cardsList}</section>
    </main>
  );
}

export default Main;
