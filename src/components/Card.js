export default function Card(props) {

  function handleClick() {
    props.onCardClick(props);
  }

  return (
    
      <div className="element">
        <div className="element__photo-container" onClick={handleClick}>
          <img className="element__photo" src={props.link} alt={props.name} />
        </div>
        <div className="element__group">
          <h2 className="element__title">{props.name}</h2>
          <div className="element__like-group">
            <button className="element__like" type="button"></button>
            <span className="element__likes-count">{props.likes.length}</span>
          </div>
        </div>
        <button className="element__delete" type="button"></button>
      </div>
    
  )
}