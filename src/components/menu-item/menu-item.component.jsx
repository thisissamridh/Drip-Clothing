import React from 'react';
import './menu-item.styles.scss';
const menuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      className={`${size} menu-item`} // here we are using the size prop to set the size of the menu item as a class name
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }} // here url is a function that takes the imageUrl as a parameter and returns a string
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default menuItem;
