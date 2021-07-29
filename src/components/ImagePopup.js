function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.card ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_type_image">
        <button className="popup__button" type="button" onClick={props.onClose}/>
        <div className="image">
          <img className="image__item" src={props.card.link} alt={props.card.name}/>
          <p className="image__description">
            {props.card.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;
