import React from 'react';
import api from '../utils/api'

function Main(props) {
  const [userName, setUserName] = React.useState()
  const [userDescription, setUserDescription] = React.useState()
  const [userAvatar, setUserAvatar] = React.useState()

  React.useEffect(() => {
    api.getUserInfo()
      .then(user => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
      })
  }, [])

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
      <section className="elements"/>
    </main>
  );
}

export default Main;
