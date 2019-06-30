import React from 'react';

import './styles.scss';

const Container = ({ children, text }) => (
  <div className={`container ${text ? 'text-container' : ''}`}>
    { children }
  </div>
)

export default Container;