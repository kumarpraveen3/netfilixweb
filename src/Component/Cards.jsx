import React from 'react';
import './Cards.css';

function Cards(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgs} alt="note show" className="card__img" />
          <div className="card__info">
            <span className="card__category">A Netflix Orignal Serise</span>
            <h3 className="card__title">{props.title}</h3>
            <a href={props.link} target=" _blank">
              <button className="button"> Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
