function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <div className="popup__container popup__container_type_image">
        <button className="popup__button" type="button"/>
        <div className="image">
          <img className="image__item" src="#" alt="#"/>
          <p className="image__description"/>
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;
