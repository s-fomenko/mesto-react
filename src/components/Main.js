import React from 'react';
import api from '../utils/api'
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialData()
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
      })
      .catch(err => console.log(err))
  }, []);

  const cardsList = cards.map(card => (
    <Card card={card} key={card._id} onCardClick={onCardClick}/>
  ));

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img className="profile__avatar" src={userAvatar} alt="аватар пользователя"/>
          <button className="profile__button profile__button_type_avatar-edit" type="button" onClick={onEditAvatar}/>
        </div>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__button profile__button_type_edit" type="button" onClick={onEditProfile}/>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button className="profile__button profile__button_type_add" type="button" onClick={onAddPlace}/>
      </section>
      <section className="elements">{cardsList}</section>
    </main>
  );
}

export default Main;
