import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
      .then(user => setCurrentUser(user))
      .catch(err => console.log(err))
  }, [])

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

  const handleUpdateUser = ({name, about}) => {
    api.editUserInfo(name, about)
      .then(newUserInfo => setCurrentUser(newUserInfo))
      .then(closeAllPopups)
      .catch(err => console.log(err))
  }

  const handleUpdateAvatar = (avatar) => {
    api.editUserAvatar(avatar)
      .then(avatar => setCurrentUser(user => {
        return {...user, ...avatar}
      }))
      .then(closeAllPopups)
      .catch(err => console.log(err))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

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
    </CurrentUserContext.Provider>
  );
}

export default App;
