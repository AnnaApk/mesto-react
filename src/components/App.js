import {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">

      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
      <Footer />

      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        {/* name="profileForm" */}
        <input id="name-input" className="popup__input popup__input_type_name" type="text" name="userName" required minLength="2" maxLength="40" />
        <span className="name-input-error popup__input-error"></span>
        <input id="job-input" className="popup__input popup__input_type_job" type="text" name="userJob" required minLength="2" maxLength="200" />
        <span className="job-input-error popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        {/* name="editAvatar" */}
        <input id="new-avatar-input" className="popup__input popup__input_type_avatar" type="url" name="newAvatar" placeholder="Ссылка на картинку" required />
        <span className="new-avatar-input-error popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="new-post" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        {/* name="addPostForm" */}
        <input id="new-place-input" className="popup__input popup__input_type_place" type="text" name="NewPlace" placeholder="Название" required minLength="1" maxLength="30" />
        <span className="new-place-input-error popup__input-error"></span>
        <input id="new-photo-input" className="popup__input popup__input_type_photo" type="url" name="NewPhoto" placeholder="Ссылка на картинку" required />
        <span className="new-photo-input-error popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="delete-post" title="Вы уверены?">
        {/* name="deletePostForm" */}
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

    </div>
  );
}

export default App;
