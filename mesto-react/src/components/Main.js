import {useEffect, useState} from 'react';
import Card from './Card';
import {api} from '../utils/Api'

function Main(props) {
  let [userName, setUserName] = useState('');
  let [userDescription, setUserDescription] = useState('');
  let [userAvatar, setUserAvatar] = useState('');
  let [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
    .then(res => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    })
  },[])

  useEffect(() => {
    api.getInitialCards()
    .then(res => {
      setCards(res);
    })
  },[])

  return (
    <main>
      <section className="profile">
        <div className="profile__user">
          <div className="profile__photo-container" onClick={props.onEditAvatar} >
            <img className="profile__photo" src={userAvatar} alt="Фото профиля" />
          </div>
          <div className="profile__info">
            <div className="profile__info-container">
              <h1 className="profile__user-name">{userName}</h1>
              <button className="profile__change" type="button" onClick={props.onEditProfile}></button>
            </div>
            <h2 className="profile__job">{userDescription}</h2>
          </div>
        </div>
        <button className="profile__add-post" type="button" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
       {cards.map((card) => (
          <Card {...card} key={card._id} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  )
}

export default Main
