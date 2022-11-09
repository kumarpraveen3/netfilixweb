import React from 'react';
import Cards from './Cards';
import CardData from './CardData';

function Card() {
  return (
    <>
      <h1 className="heding_style"> Top 5 Popular Web Serise</h1>

      {CardData.map(val => {
        return <Cards imgs={val.imgs} title={val.title} link={val.link} />;
      })}
    </>
  );
}

export default Card;
