import React from 'react';
// Styles
import './styles.css';

export function SubTitle({ text, color }) {
  const styles = {
    color,
  };

  return (
    <h2 style={styles} className='ds-subtitle'>
      {text}
    </h2>
  );
}

SubTitle.defaultProps = {
  color: '#b5b5b5',
};
