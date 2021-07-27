import './App.css';

function App() {
  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <img className="header__logo" src="<%=require('./images/logo.svg')%>" alt="логотип Mesto"/>
        </header>
        <main className="content">
          <section className="profile">
            <div className="profile__avatar-wrapper">
              <img className="profile__avatar" src="<%=require('./images/avatar.jpg')%>" alt="аватар пользователя"/>
                <button className="profile__button profile__button_type_avatar-edit" type="button"/>
            </div>
            <div className="profile__info">
              <div className="profile__wrapper">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <button className="profile__button profile__button_type_edit" type="button"/>
              </div>
              <p className="profile__description">Исследователь океана</p>
            </div>
            <button className="profile__button profile__button_type_add" type="button"/>
          </section>
          <section className="elements"/>
        </main>
        <footer className="footer">
          <p className="footer__capture">&copy; 2020 Mesto Russia</p>
        </footer>
      </div>

      <div className="popup popup_type_edit">
        <div className="popup__container">
          <button className="popup__button" type="button"/>
          <form className="form form_type_edit" action="#" name="editProfile">
            <h2 className="form__title">Редактировать профиль</h2>
            <div className="form__input-wrapper">
              <input className="form__input" id="name" type="text" name="name" placeholder="Имя" minLength="2"
                     maxLength="40" required/>
                <span className="form__input-error name-error"/>
            </div>
            <div className="form__input-wrapper">
              <input className="form__input" id="description" type="text" name="description" placeholder="Описание"
                     minLength="2" maxLength="200" required/>
                <span className="form__input-error description-error"/>
            </div>
            <button className="form__button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_add">
        <div className="popup__container">
          <button className="popup__button" type="button"/>
          <form className="form form_type_add" action="#" name="addCard">
            <h2 className="form__title">Новое место</h2>
            <div className="form__input-wrapper">
              <input className="form__input" id="place" type="text" name="place" placeholder="Название" minLength="2"
                     maxLength="30" required/>
                <span className="form__input-error place-error"/>
            </div>
            <div className="form__input-wrapper">
              <input className="form__input" id="link" type="url" name="link" placeholder="Ссылка на картинку" required/>
                <span className="form__input-error link-error"/>
            </div>
            <button className="form__button" type="submit">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_avatar-edit">
        <div className="popup__container">
          <button className="popup__button" type="button"/>
          <form className="form form_type_avatar-edit" action="#" name="editAvatar">
            <h2 className="form__title">Обновить аватар</h2>
            <div className="form__input-wrapper">
              <input className="form__input" id="avatar" type="url" name="avatar" placeholder="Ссылка на аватар" required/>
                <span className="form__input-error avatar-error"/>
            </div>
            <button className="form__button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_image">
        <div className="popup__container popup__container_type_image">
          <button className="popup__button" type="button"/>
          <div className="image">
            <img className="image__item" src="#" alt="#"/>
              <p className="image__description"/>
          </div>
        </div>
      </div>

      <div className="popup popup_type_delete">
        <div className="popup__container">
          <button className="popup__button" type="button"/>
          <form className="form form_type_delete" action="#" name="deleteCard">
            <h2 className="form__title form__title_type_delete">Вы уверены?</h2>
            <button className="form__button form__button_type_delete" type="submit">Да</button>
          </form>
        </div>
      </div>

      <template id="card-template">
        <article className="card">
          <img className="card__image" src="#" alt="#"/>
            <div className="card__inner">
              <h2 className="card__title"/>
              <div className="card__wrapper">
                <button className="card__button card__button_type_like" type="button"/>
                <span className="card__likes-count">6</span>
              </div>
            </div>
            <button className="card__button card__button_type_remove" type="button"/>
        </article>
      </template>
    </div>
  );
}

export default App;
