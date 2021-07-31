import React from 'react';

function Card({card, onCardClick}) {
  const handleClick = () => {
    onCardClick(card);
  }

  return (
    <article className="card">
      <img className="card__image" src={card.link} alt={card.name} onClick={handleClick}/>
      <div className="card__inner">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__wrapper">
          <button className="card__button card__button_type_like" type="button"/>
          <span className="card__likes-count">{card.likes.length}</span>
        </div>
      </div>
      <button className="card__button card__button_type_remove" type="button"/>
    </article>
  );
}

export default Card;
