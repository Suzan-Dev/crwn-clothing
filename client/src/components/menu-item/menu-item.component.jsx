import React from 'react';
import { useNavigate } from 'react-location';
import './menu-item.style.scss';

export const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => navigate({ to: `${linkUrl}` })}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
