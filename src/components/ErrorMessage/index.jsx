// Internal
import React from 'react';
import { Message } from '..';
import { TEXT_ERROR_MESSAGE } from '../../constants';

export function ErrorMessage({ text, ...props }) {
  return <Message {...props} text={text || TEXT_ERROR_MESSAGE} />;
}

ErrorMessage.defaultProps = {
  text: TEXT_ERROR_MESSAGE,
  color: '#830000',
  style: {
    boxShadow: '0px 0px 20px 2px rgba(131, 0, 0, 0.75)',
  },
};
