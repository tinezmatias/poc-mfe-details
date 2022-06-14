// Vendor
import React from 'react';
import { useNavigate } from 'react-router-dom';
// Styles
import './styles.css';

export function BackButton() {
  const navigate = useNavigate();
  const onClick = () => navigate(-1);

  return (
    <div className='ds-back-button-container'>
      <button
        type='button'
        onClick={onClick}
        className='ds-reset-button ds-back-button'>
        <img
          src='/assets/back_icon.webp'
          alt='img-poster'
          className='ds-back-button-image'
        />
      </button>
    </div>
  );
}
