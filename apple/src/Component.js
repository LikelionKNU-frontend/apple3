import React from "react";
import "../App.css";

function Card({ img, title, price }) {
  return (
    <div className="card">
      <img src={`/${img}`} alt={title} className="card-image" />
      <p className="card-title">{title}</p>
      {price && <p className="card-price">{price}</p>}
    </div>
  );
}

export default Card;
