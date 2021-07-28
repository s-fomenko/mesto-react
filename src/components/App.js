import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  return (
    <div className="page">
      <div className="container">
        <Header/>
        <Main/>
        <Footer/>
      </div>

      <PopupWithForm name="avatar-edit" title="Обновить аватар" buttonText="Сохранить">
        <div className="form__input-wrapper">
          <input className="form__input" id="avatar" type="url" name="avatar" placeholder="Ссылка на аватар" required/>
          <span className="form__input-error avatar-error"/>
        </div>
      </PopupWithForm>

      <PopupWithForm name="edit" title="Редактировать профиль" buttonText="Сохранить">
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
      </PopupWithForm>

      <PopupWithForm name="add" title="Новое место" buttonText="Создать">
        <div className="form__input-wrapper">
          <input className="form__input" id="place" type="text" name="place" placeholder="Название" minLength="2"
                 maxLength="30" required/>
          <span className="form__input-error place-error"/>
        </div>
        <div className="form__input-wrapper">
          <input className="form__input" id="link" type="url" name="link" placeholder="Ссылка на картинку" required/>
          <span className="form__input-error link-error"/>
        </div>
      </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да"/>

      <ImagePopup/>

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
