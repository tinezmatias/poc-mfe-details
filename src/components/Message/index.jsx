import React from 'react';
// Internal
import { SubTitle } from '..';
import './styles.css';

export function Message({ style, ...props }) {
  return (
    <div style={style} className='ds-message'>
      <SubTitle {...props} />
    </div>
  );
}

Message.defaultProps = {
  color: '#b5b5b5',
  style: {},
};
