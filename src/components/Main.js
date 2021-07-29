function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img className="profile__avatar" src="<%=require('./images/avatar.jpg')%>" alt="аватар пользователя"/>
          <button className="profile__button profile__button_type_avatar-edit" type="button" onClick={props.onEditAvatar}/>
        </div>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__button profile__button_type_edit" type="button" onClick={props.onEditProfile}/>
          </div>
          <p className="profile__description">Исследователь океана</p>
        </div>
        <button className="profile__button profile__button_type_add" type="button" onClick={props.onAddPlace}/>
      </section>
      <section className="elements"/>
    </main>
  );
}

export default Main;
