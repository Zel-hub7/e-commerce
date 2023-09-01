import React from "react";
import "./menu-item.styles.scss";
import { useNavigate } from "react-router-dom";


const Menu = ({ title, imageUrl, size,linkUrl }) => {
  const navigate = useNavigate();

  const handleCardClick = (pageUrl) => {
    navigate(pageUrl);
  }
  return (
    <div className={`${size} menu-item`} onClick={() => handleCardClick(`${linkUrl}`)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};
export default Menu;
