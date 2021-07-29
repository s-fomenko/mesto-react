function PopupWithForm(props) {
  console.log('isOpen', props.isOpen)
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__button" type="button"/>
        <form className={`form form_type_${props.name}`} action="#" name={props.name}>
          <h2 className={`form__title form__title_type_${props.name}`}>{props.title}</h2>
          {props.children}
          <button className={`form__button form__button_type_${props.name}`} type="submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
