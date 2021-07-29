import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <div className="container">
        <Header/>
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer/>
      </div>

      <PopupWithForm
        name="avatar-edit"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="form__input-wrapper">
          <input className="form__input" id="avatar" type="url" name="avatar" placeholder="Ссылка на аватар" required/>
          <span className="form__input-error avatar-error"/>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
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

      <PopupWithForm
        name="add"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
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

      {selectedCard && <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />}
    </div>
  );
}

export default App;
